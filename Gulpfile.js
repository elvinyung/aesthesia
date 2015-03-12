'use strict';

var gulp = require('gulp'),
  notify = require('gulp-notify'),
  zip = require('gulp-zip'),
  del = require('del');

var paths = {
  src: 'src/*',
  dest: 'dist',
  crx: 'aesthesia.crx',
  zip: 'aesthesia.zip'
};

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('cleanzip', function(cb) {
  del(paths.zip, cb);
});

gulp.task('crx', function() {
  return gulp.src(paths.src)
    .pipe(zip(paths.crx))
    .pipe(gulp.dest(paths.dest))
    .pipe(notify('Zipped source files into ' + paths.dest));
});

gulp.task('zip', ['cleanzip'], function() {
  return gulp.src(paths.src)
    .pipe(zip(paths.zip))
    .pipe(gulp.dest('.'))
    .pipe(notify('Package created'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('crx');
});

