var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var livereload = require('gulp-livereload')

var src = {
  base: 'src',
  modules: 'src/modules'
};

// SASS compiling task.
gulp.task('sass', function() {
  return gulp.src(['src/sass/**/*.sass'])
    .pipe(sass({indentedSyntax: true}))
    .on('error', swallowError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('src/css'));
});



gulp.task('watch', function() {
  livereload.listen();

  // watch just the CSS so livereload doesn’t reload the entire page
  gulp.watch([src.modules + '/**/*.sass'], ['sass']);
  gulp.watch([src.modules + '/**/*.css'], livereload.changed);

  gulp.watch([src.modules + '/**/*.html'], livereload.changed);

  gulp.watch(src.modules + '/**/*.js', ['jshint']).on('change', livereload.changed);
});