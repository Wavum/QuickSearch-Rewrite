var concat = require("gulp-concat");
var clean = require("gulp-clean");
var cleanCSS = require("gulp-clean-css");
var es = require("event-stream");
var filter = require("gulp-filter");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var uglify = require("gulp-uglify");
var webpack = require("webpack-stream");

var buildPath = "build";

gulp.task("clean", function()
{
    gulp.src(buildPath + "/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("jsBuild", function()
{
    var javascriptFiles = gulp.src("src/js/**/*.js")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(concat("vendor.js"));

    var typescriptFiles = gulp.src("src/ts/**/*.ts")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(webpack(require("./webpack.config.js")))
                              .pipe(gulp.dest(buildPath + "/js"))
                              .pipe(filter("**/*.js"));

    return es.merge(javascriptFiles, typescriptFiles)
             .pipe(plumber())
             .pipe(uglify())
             .pipe(rename({ extname: ".min.js" }))
             .pipe(sourcemaps.write(".", { includeContent: false }))
             .pipe(gulp.dest(buildPath + "/js"));
});

gulp.task("cssBuild", function()
{
    return gulp.src("src/css/**/*.css")
               .pipe(plumber())
               .pipe(sourcemaps.init())
               .pipe(gulp.dest(buildPath + "/css"))
               .pipe(sourcemaps.write(".", { includeContent: false }))
               .pipe(cleanCSS())
               .pipe(rename({ extname: ".min.css" }))
               .pipe(gulp.dest(buildPath + "/css"));
});

gulp.task("indexBuild", function()
{
    return gulp.src("src/index.html")
               .pipe(plumber())
               .pipe(gulp.dest(buildPath));
});

gulp.task("build", function()
{
    runSequence("clean", ["jsBuild", "cssBuild", "indexBuild"]);
});