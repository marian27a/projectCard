var gulp = require("gulp"),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-tinypng'),
  htmlminify = require("gulp-html-minify");


gulp.task('html' , function(){
    return gulp.src("./dist/**/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("./app"))
});


gulp.task('sass', function () {
  return gulp.src('./dist/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe((autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'iOS 7'])))
    .pipe(gulp.dest('./app/css'));
});
gulp.task('javascript', function () {
  return gulp.src('./dist/js/**/*.js')
  	.pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js'));
});
gulp.task('tinypng', function () {
  return gulp.src('./dist/img/**/*.js')
  	.pipe(imagemin("Your api"))
    .pipe(gulp.dest('./app/img'));
});

gulp.task("watch", ['sass', 'javascript', 'html'], function(){
	gulp.watch('./dist/sass/**/*.scss', ['sass']);
	gulp.watch('./dist/js/**/*.js', ['javascript']);
  gulp.watch("./dist/**/*.html", ['html']);
})

gulp.task("default", function(){
	console.log('it is working')
})