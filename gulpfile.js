var gulp = require("gulp"),
    babel = require("gulp-babel"),
    plumber = require("gulp-plumber"),
    es6Path = "es6/*.js",
    compilePath = "es6/compiled";

gulp.task("babel", function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath));
});

gulp.task("watch", function() {

    gulp.watch([es6Path], ["babel"]);

});

gulp.task("default", ["babel", "watch"]);