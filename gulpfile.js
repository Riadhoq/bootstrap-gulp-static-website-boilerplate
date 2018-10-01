// Less configuration
var gulp = require("gulp");
var less = require("gulp-less");
var minifyCss = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
gulp.task("less", function() {
  return gulp
    .src("less/main.less")
    .pipe(
      less({
        strictMath: "on"
      })
    )
    .pipe(gulp.dest("css"));
});

gulp.task("css-minify", function() {
  return gulp
    .src("css/main.css")
    .pipe(minifyCss())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("css/min"));
});

gulp.task("imagemin", function() {
  gulp
    .src("src/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function() {
  gulp.watch("less/*.less", ["less"]);
  gulp.watch("css/main.css", ["css-minify"]);
});
