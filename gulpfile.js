var gulp = require("gulp"),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require("gulp-babel"),
    plumber = require("gulp-plumber"),
    uglify = require("gulp-uglify"),
    es6Path = "es6/*.js",
    compilePath = "es6/compiled";

gulp.task("babel", function () {
    gulp.src([es6Path])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(compilePath));
});

gulp.task("watch", function() {

    gulp.watch([es6Path], ["babel"]);

});

gulp.task('compress', function() {
    return gulp.src(compilePath + "/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task("default", ["babel", "watch"]);

gulp.task("release", ["default", "compress"]);