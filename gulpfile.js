const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const pug = require("gulp-pug");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("pug", function () {
  return gulp
    .src("source/pug/**/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("public/"))
    .pipe(browserSync.stream());
});

gulp.task("uglify", function () {
  return gulp
    .src("source/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/js/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./public"
  });
  gulp.watch("source/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("source/js/**/*.js", gulp.series("uglify"));
  gulp.watch("public/**/*.html").on("change", browserSync.reload);
});


gulp.task("default", gulp.series("pug", "uglify", "watch"));