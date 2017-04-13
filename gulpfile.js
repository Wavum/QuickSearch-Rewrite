var concat = require("gulp-concat");
var clean = require("gulp-clean");
var cleanCSS = require("gulp-clean-css");
var es = require("event-stream");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("src/ts/tsconfig.json");
var uglify = require("gulp-uglify");
var webpack = require("webpack-stream");

var buildDebugPath = "build/debug";
var buildReleasePath = "build/release";

gulp.task("cleanBuild", function()
{
    gulp.src(buildDebugPath + "/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
        
    gulp.src(buildReleasePath + "/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("jsBuildDebug", function()
{
    var javascriptFiles = gulp.src("src/js/**/*.js")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(concat("vendor.js"));

    var typescriptFiles = gulp.src("src/ts/**/*.ts")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(webpack(require("./webpack.config.js")))
                              .pipe(gulp.dest(buildDebugPath + "/js"));
                              //.pipe(tsProject());

    return es.merge(javascriptFiles, typescriptFiles)
             .pipe(plumber())
             .pipe(uglify())
             .pipe(rename({ extname: ".min.js" }))
             .pipe(sourcemaps.write(".", { includeContent: false }))
             .pipe(gulp.dest(buildDebugPath + "/js"));
});

gulp.task("cssBuildDebug", function()
{
    return gulp.src("src/css/**/*.css")
               .pipe(plumber())
               .pipe(sourcemaps.init())
               .pipe(cleanCSS())
               .pipe(rename({ extname: ".min.css" }))
               .pipe(sourcemaps.write(".", { includeContent: false }))
               .pipe(gulp.dest(buildDebugPath + "/css"));
});

gulp.task("indexBuildDebug", function()
{
    return gulp.src("src/index.html")
               .pipe(plumber())
               .pipe(gulp.dest(buildDebugPath));
});

gulp.task("buildDebug", function()
{
    runSequence("cleanBuild", ["jsBuildDebug", "cssBuildDebug", "indexBuildDebug"]);
});