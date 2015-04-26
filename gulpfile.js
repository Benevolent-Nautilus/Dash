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
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var open = require('gulp-open');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
var mongobackup = require('mongobackup');
var livereload = require('gulp-livereload');
var mocha = require('gulp-mocha');

//Remove
var sass = require('gulp-sass');


var prod = $.util.env.prod;

var path = {
  // front end
  SRC_SCRIPT: 'client/src/**.+(js | jsx)',
  SRC_CSS: 'client/src/styles/**.scss',
  SRC_HTML: 'client/src/*.html',
  SRC_IMAGE: 'client/src/images/**/*',
  ENTRY_POINT: './client/src/scripts/app.jsx',
  DIST_CSS: 'client/dist/styles',
  DIST_SCRIPT: 'client/dist/scripts',
  DIST_HTML: 'client/dist',
  DIST_IMAGE:'./client/dist/images',
  // back end
  LOCAL_CONFIG: './server/config/local.env'
};

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
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
  return gulp.src('client/src/styles/**/*.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    sourceComments: 'map',
    includePaths: 'client/src/styles'
  }))
  .on('error', function(error){
    displayError(error);  
  })
  .pipe(gulp.dest('client/dist/styles'))
  .pipe(livereload());
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
      }))
      .pipe(livereload());
  }

  bundler.on('update', rebundle);

  return rebundle();
});

//Run Script once
gulp.task('script', function() {
  var bundler = browserify({
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
  var start = Date.now();
  return bundler.bundle()
    .on('error', onError)
    .pipe(source('app.js'))
    .pipe(prod ? $.streamify($.uglify()) : $.util.noop())
    .pipe(gulp.dest(path.DIST_SCRIPT))
    .pipe($.notify(function() {
      console.log('Bundling Complete - ' + (Date.now() - start) + 'ms');
    }))
    .pipe(livereload());
});


// HTML
gulp.task('html', function() {
  return gulp.src(path.SRC_HTML)
    .pipe($.useref())
    .pipe(gulp.dest(path.DIST_HTML))
    .pipe($.size())
    .pipe(livereload());
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
    .pipe($.size())
    .pipe(livereload());
});

//Linting 
gulp.task('clientLint', function() {
  return gulp.src(['client/dist/*.+(js)', 'client/src/**.+(js)'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'));
});

gulp.task('serverLint', function() {
  return gulp.src('server/**/**.+(js)')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'));
});

gulp.task('test', function() {
  return gulp.src('./server/spec/*.js')
  .pipe(mocha())
  .once('end', function () {
    process.exit();
  });
});


//Create webserver
gulp.task('serve', function() {
  nodemon({
    script: './server/app.js',
    ignore: ['node_modules/**'],
    tasks: ['serverLint']
  })
  .on('restart', function() {
    console.log('restarted!');
  });
});

//Open live server in browser
gulp.task('open', function() {
  setTimeout(function(){
    var options = {
      url: 'http://localhost:8080'
    };
    gulp.src('client/dist/index.html')
    .pipe(open(' ', options));
  }, 1500);
});

gulp.task('start-mongo', function() {
  exec('mongod', function(err, stdout, stderr) {
    console.log(stdout);
  });
});

gulp.task('stop-mongo', function() {
  exec('mongod --shutdown', function(err, stdout, stderr) {
    console.log(stdout);
  });
});

gulp.task('mongodump', function() { 
  mongobackup.dump({
    host: 'localhost'
  });
});


gulp.task('mongoclean', function() {
  runSequence('start-mongo', 
    'mongodump', 
    'stop-mongo');
});

// Delete the whole dist folder
gulp.task('clean', function(cb) {
  del([path.DIST_HTML], cb);
});

//Build local environment for testing/development
gulp.task('localtest', function(callback) {
  runSequence('stop-mongo',
    'clean', 
    ['serverLint'], 
    ['html', 'styles', 'images', 'scripts'],
    'clientLint',
    'start-mongo',
    'serve',
    'watch',
    'open');
});

// Default task - DEPRECATING
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    ['html', 'styles', 'images', 'scripts'],
    ['serverLint','clientLint'],
    'test'
    );
});


// Watch
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(path.SRC_HTML, ['clientLint', 'html']);
  gulp.watch(path.SRC_CSS, ['clientLint', 'styles']);
  gulp.watch(path.SRC_IMAGE, ['clientLint', 'images']);
});
