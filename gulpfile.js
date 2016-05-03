/**
 * Tasks
 */
var gulp = require('gulp');
var gulpsass = require('gulp-sass');
var gulpBase64 = require('gulp-css-base64');

gulp.task('compile-sass', function(){
  console.log('Compiling sass.');
  return gulp.src('css/main.scss').pipe( gulpsass() ).pipe( gulp.dest('css') );
});

gulp.task('watch-sass', function(){
  gulp.watch('css/**/*.scss', ['compile-sass']);

  //After sass compiled to css, comvert images in file to base64
  gulp.src('css/main.css').pipe( gulpBase64() ).pipe( gulp.dest('css') );
});
