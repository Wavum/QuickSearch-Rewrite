var gulp = require("gulp");
var size = require('gulp-filesize');
var es = require("event-stream");
var runSequence = require('run-sequence');
var clean = require("gulp-clean");
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("src/tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var buildDebugPath = "build/debug";
var buildReleasePath = "build/release";

gulp.task("cleanBuild", function()
{
    gulp.src(buildDebugPath + "/*", { read: false })
		.pipe(clean());
        
    gulp.src(buildReleasePath + "/*", { read: false })
		.pipe(clean());
});

gulp.task("jsBuildDebug", function()
{
    var javascriptFiles = gulp.src("src/js/**/*.js")
                              .pipe(sourcemaps.init())
                              .pipe(concat("vendor.js"));

    var typescriptFiles = gulp.src("src/ts/**/*.ts")
                              .pipe(sourcemaps.init())
                              .pipe(tsProject());

    return es.merge(javascriptFiles, typescriptFiles)
             .pipe(size())
             .pipe(uglify())
             .pipe(size())
             .pipe(rename({ extname: ".min.js" }))
             .pipe(sourcemaps.write(".", { includeContent: false }))
             .pipe(gulp.dest(buildDebugPath + "/js"));
});

gulp.task("cssBuildDebug", function()
{
    return gulp.src("src/css/**/*.css")
               .pipe(sourcemaps.init())
               .pipe(size())
               .pipe(cleanCSS())
               .pipe(size())
               .pipe(rename({ extname: ".min.css" }))
               .pipe(sourcemaps.write(".", { includeContent: false }))
               .pipe(gulp.dest(buildDebugPath + "/css"));
});

gulp.task("indexBuildDebug", function()
{
    return gulp.src("src/index.html")
               .pipe(gulp.dest(buildDebugPath));
});

gulp.task("buildDebug", function()
{
    runSequence("cleanBuild", "jsBuildDebug", "cssBuildDebug", "indexBuildDebug");
});