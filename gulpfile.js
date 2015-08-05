var gulp = require("gulp"),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require("gulp-babel"),
    plumber = require("gulp-plumber"),
    uglify = require("gulp-uglify"),
    concat = require('gulp-concat'),
    es6Path = "es6/*.js",
    compilePath = "es5";

gulp.task("babel", function () {
    gulp.src([es6Path])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(compilePath));
});

gulp.task("compile_dart", function () {
    gulp.src(["dart/es6-transcompiled/dev_compiler/**/*.js",
        "!dart/es6-transcompiled/dev_compiler/**/harmony_feature_check.js",
        "dart/es6-transcompiled/pantrysort/**/*.js",
        "dart/es6-transcompiled/main.js"])
        .pipe(concat("dart.amalgam.js"))
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {

    gulp.watch([es6Path], ["babel"]);

});

gulp.task("compress", function() {
    return gulp.src(compilePath + "/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["babel", "watch"]);

gulp.task("release", ["default", "compress"]);