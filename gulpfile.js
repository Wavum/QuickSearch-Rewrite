var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var del = require("del");
var es = require("event-stream");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("src/ts/tsconfig.json");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var uglify = require("gulp-uglify");

var buildPath = "dist";
var sourcePath = "src";
var vendorCSSPaths = ["node_modules/bootstrap/dist/css/bootstrap.min.css",
                      "node_modules/bootstrap-sidebar/dist/css/sidebar.css"];
var vendorJSPaths = ["node_modules/jquery/dist/jquery.min.js",
                     "node_modules/tether/dist/js/tether.min.js",
                     "node_modules/bootstrap/dist/js/bootstrap.min.js",
                     "node_modules/bootstrap-sidebar/dist/js/sidebar.js"];

gulp.task("vendorClean", function()
{
    return del(buildPath + "/vendor/**/*");
});

gulp.task("jsClean", function()
{
    return del(buildPath + "/js/**/*");
});

gulp.task("cssClean", function()
{
    return del(buildPath + "/css/**/*");
});

gulp.task("fontsClean", function()
{
    return del(buildPath + "/fonts/**/*");
});

gulp.task("indexClean", function()
{
    return del(buildPath + "/index.html");
});

gulp.task("clean", function()
{
    return del(buildPath + "/*");
});

gulp.task("vendorBuild", function()
{
    gulp.src(vendorCSSPaths)
        .pipe(plumber())
        .pipe(cleanCSS())
        .pipe(gulp.dest(buildPath + "/vendor/css"));

    gulp.src(vendorJSPaths)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(buildPath + "/vendor/js"));
});

gulp.task("jsBuild", function()
{
    // Hopefully later supported: https://github.com/gulp-sourcemaps/gulp-sourcemaps/issues/191
    // var javascriptFiles = gulp.src(sourcePath + "/js/**/*.js")
    //                           .pipe(plumber())
    //                           .pipe(sourcemaps.init());

    var typescriptFiles = gulp.src(sourcePath + "/ts/**/*.ts")
                              .pipe(plumber())
                              .pipe(sourcemaps.init())
                              .pipe(tsProject());

    var javascriptFile = es.merge(/*javascriptFiles, */typescriptFiles)
                           .pipe(plumber())
                           .pipe(concat("index.js"));

    javascriptFile.pipe(plumber())
                  .pipe(concat("index.js")) //Without this line the file wouldn't be included
                  .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../src/ts" }))
                  .pipe(gulp.dest(buildPath + "/js"));

    javascriptFile.pipe(plumber())
                  .pipe(uglify())
                  .pipe(rename({ extname: ".min.js" }))
                  .pipe(gulp.dest(buildPath + "/js"));
});

gulp.task("cssBuild", function()
{
    // Hopefully later supported: https://github.com/gulp-sourcemaps/gulp-sourcemaps/issues/191
    // var cssFiles = gulp.src(sourcePath + "/css/**/*.css")
    //                    .pipe(plumber())
    //                    .pipe(sourcemaps.init());

    var scssFiles = gulp.src(sourcePath + "/scss/**/*.scss")
                       .pipe(plumber())
                       .pipe(sourcemaps.init())
                       .pipe(sass());

    var cssFile = es.merge(/*cssFiles, */scssFiles)
                    .pipe(plumber())
                    .pipe(concat("index.css"))
                    .pipe(autoprefixer());

    cssFile.pipe(plumber())
           .pipe(concat("index.css")) //Without this line the file wouldn't be included
           .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../../src/scss" }))
           .pipe(gulp.dest(buildPath + "/css"));

    cssFile.pipe(plumber())
           .pipe(cleanCSS())
           .pipe(rename({ extname: ".min.css" }))
           .pipe(gulp.dest(buildPath + "/css"));
});

gulp.task("fontsBuild", function()
{
    return gulp.src(sourcePath + "/fonts/**/*")
               .pipe(plumber())
               .pipe(gulp.dest(buildPath + "/fonts"));
});

gulp.task("indexBuild", function()
{
    return gulp.src(sourcePath + "/index.html")
               .pipe(plumber())
               .pipe(gulp.dest(buildPath));
});

gulp.task("build", function()
{
    return runSequence("clean", "fontsBuild", "vendorBuild", "jsBuild", "cssBuild", "indexBuild");
});

gulp.task("buildWatch", function()
{
    gulp.watch([sourcePath + "/ts/**/*.ts", sourcePath + "/js/**/*.js"], function()
    {
        runSequence("jsClean", "jsBuild");
    });

    gulp.watch([sourcePath + "/css/**/*.css", sourcePath + "/scss/**/*.scss"], function()
    {
        runSequence("cssClean", "cssBuild");
    });

    gulp.watch(sourcePath + "/index.html", function()
    {
        runSequence("vendorClean", "indexClean", "vendorBuild", "indexBuild");
    });
});