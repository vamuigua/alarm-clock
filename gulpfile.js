//Variables for the packages
var gulp = require('gulp');
var browserify = require('browserify');
//used for putting the browserified source code into a new file
var source = require('vinyl-source-stream');

//browserify task
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/set-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
