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
var sourcePath = "src";

gulp.task("jsClean", function()
{
    gulp.src(buildPath + "/js/**/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("cssClean", function()
{
    gulp.src(buildPath + "/css/**/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("indexClean", function()
{
    gulp.src(buildPath + "/index.html", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("clean", function()
{
    gulp.src(buildPath + "/*", { read: false })
        .pipe(plumber())
		.pipe(clean());
});

gulp.task("jsBuild", function()
{
    var javascriptFiles = gulp.src(sourcePath + "/js/**/*.js")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(concat("vendor.js"));

    var typescriptFiles = gulp.src(sourcePath + "/ts/**/*.ts")
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
    gulp.src("node_modules/bootstrap/dist/css/bootstrap.min.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest(buildPath + "/css"));

    return gulp.src(sourcePath + "/css/**/*.css")
               .pipe(plumber())
               .pipe(gulp.dest(buildPath + "/css"))
               .pipe(cleanCSS())
               .pipe(rename({ extname: ".min.css" }))
               .pipe(gulp.dest(buildPath + "/css"));
});

gulp.task("indexBuild", function()
{
    return gulp.src(sourcePath + "/index.html")
               .pipe(plumber())
               .pipe(gulp.dest(buildPath));
});

gulp.task("build", function()
{
    runSequence("clean", "jsBuild", "cssBuild", "indexBuild");
});

gulp.task("buildWatch", function()
{
    gulp.watch([sourcePath + "/ts/**/*.ts", sourcePath + "/js/**/*.js"], function()
    {
        runSequence("jsClean", "jsBuild");
    });

    gulp.watch(sourcePath + "/css/**/*.css", function()
    {
        runSequence("cssClean", "cssBuild");
    });

    gulp.watch(sourcePath + "/index.html", function()
    {
        runSequence("indexClean", "indexBuild");
    });
});