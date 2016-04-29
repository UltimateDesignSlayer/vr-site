/**
 * Tasks
 */
var gulp = require('gulp');
var gulpsass = require('gulp-sass');

gulp.task('compile-sass', function(){
  console.log('Compiling sass.');
  return gulp.src('css/main.scss').pipe( gulpsass() ).pipe( gulp.dest('css') );
});

gulp.task('watch-sass', function(){
  gulp.watch('css/**/*.scss', ['compile-sass']);
});
