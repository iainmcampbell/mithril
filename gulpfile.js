var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var livereload = require('gulp-livereload')

var src = {
  base: 'src',
  modules: 'src/modules'
};

var swallowError = function(error) {
  console.log(error.toString());
  this.emit('end');
};

// SASS compiling task.
gulp.task('sass', function() {
  return gulp.src(['./src/sass/**/*.sass'])
    .pipe(sass({indentedSyntax: true}))
    .on('error', swallowError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('src/css'));
});



gulp.task('watch', function() {
  livereload.listen();

  // watch just the CSS so livereload doesn’t reload the entire page
  gulp.watch(['src/sass/**/*.sass'], ['sass']);
  gulp.watch(['src/css/*.css'], livereload.changed);

  gulp.watch(['src/**/*.html'], livereload.changed);

  gulp.watch('src/**/*.js', ['jshint']).on('change', livereload.changed);
});