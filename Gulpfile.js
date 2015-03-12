'use strict';

var gulp = require('gulp'),
  notify = require('gulp-notify'),
  zip = require('gulp-zip'),
  del = require('del');

var paths = {
  src: 'src/*',
  dest: 'dist',
  crx: 'aesthesia.crx',
  pack: 'aesthesia.zip'
};

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('crx', function() {
  return gulp.src(paths.src)
    .pipe(zip(paths.crx))
    .pipe(gulp.dest(paths.dest))
    .pipe(notify('Zipped source files into ' + paths.dest));
});

gulp.task('default', ['clean'], function() {
  gulp.start('crx');
});

