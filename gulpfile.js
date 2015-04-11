'use strict';
/**
@fileOverview 
<p>Gulp file will handle remedial tasks for day to day options</p>
@author Benevolent-Nautilus
*/

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var del = require('del');
var path = require('path');
// Organizes your browser code and loads modules installed by npm
var browserify = require('browserify');
// Compiles ES6 to ES5
var reactify = require('reactify');
// Watches for changes in modules then rebuilds
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass');


var prod = $.util.env.prod;

var path = {
  // front end
  SRC_CSS: 'client/src/styles/**.scss',
  SRC_HTML: 'client/src/*.html',
  SRC_IMAGE: 'client/src/images/**/*',
  ENTRY_POINT: './client/src/scripts/app.jsx',
  DIST_CSS: 'client/dist/styles',
  DIST_SCRIPT: 'client/dist/scripts',
  DIST_HTML: 'client/dist',
  DIST_IMAGE:'client/dist/images',
  // back end
  LOCAL_CONFIG: './server/config/local.env'
}


// gulp-plumber for error handling
function onError() {
  /* jshint ignore:start */
  var args = Array.prototype.slice.call(arguments);
  $.util.beep();
  $.notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
  /* jshint ignore:end */
}


// Styles
gulp.task('styles', function() {
  gulp.src('client/src/styles/**/*.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    sourceComments: 'map',
    includePaths: 'client/src/styles'
  }))
  .on('error', function(error){
    displayError(error);  
  })
  .pipe(gulp.dest('client/dist/styles'))
});



// Scripts ok
gulp.task('scripts', function() {
  var bundler;
  bundler = browserify({
    basedir: __dirname,
    noparse: ['react/addons', 'reflux', 'fastclick', 'react-router'],
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  bundler = watchify(bundler);

  function rebundle() {
    console.log('Bundling Scripts...');
    var start = Date.now();
    return bundler.bundle()
      .on('error', onError)
      .pipe(source('app.js'))
      .pipe(prod ? $.streamify($.uglify()) : $.util.noop())
      .pipe(gulp.dest(path.DIST_SCRIPT))
      .pipe($.notify(function() {
          console.log('Bundling Complete - ' + (Date.now() - start) + 'ms');
      }));
  }

  bundler.on('update', rebundle);

  return rebundle();
});


// HTML
gulp.task('html', function() {
  return gulp.src(path.SRC_HTML)
    .pipe($.useref())
    .pipe(gulp.dest(path.DIST_HTML))
    .pipe($.size());
});


// Images
gulp.task('images', function() {
  return gulp.src(path.SRC_IMAGE)
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(path.DIST_IMAGE))
    .pipe($.size());
});


// Webserver
gulp.task('serve', function() {
  gulp.src('client/dist')
    .pipe($.webserver({
      livereload: true,
      port: 9000,
      fallback: 'client/index.html'
    }));
});


// Clean
gulp.task('clean', function(cb) {
  del([path.DIST_CSS, path.DIST_SCRIPT, path.DIST_IMAGE], cb);
});


// Default task
gulp.task('default', ['clean', 'html', 'styles', 'scripts']);


// Watch
gulp.task('watch', ['html', 'styles', 'scripts', 'serve'], function() {
  gulp.watch(path.SRC_HTML, ['html']);
  gulp.watch(path.SRC_CSS, ['styles']);
  gulp.watch(path.SRC_IMAGE, ['images']);
});
