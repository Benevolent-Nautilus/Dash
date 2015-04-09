module.exports = function (grunt) {
  var localConfig;
  try {
    localConfig = require('./server/config/local.env');
  } catch (e) {
    localConfig = {};
  }

  //Load grunt tasks, when needed
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server',
  });

  //Time how long tasks take.
  require('time-grunt')(grunt);

  //Define the configuration for all tasks
  grunt.initConfig({
    express: {
      tasks: ['express:dev', 'wait'],
      options: {
        port: process.env.PORT || 8080
      },
      dev: {
        options: {
          script: 'server/app.js',
          debug: true
        }
      },
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch : {
      express: {
        files: [
          'server/**/*.{js,json}'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    },
    jshint: {
        server: {
          options: {
            jshintrc: '.jshintrc'
          },
          src: [
            'server/**/*.js',
            '!server/**/*.spec.js'
          ]
        }
      },
      nodemon: {
        debug: {
          script: 'server/app.js',
          options: {
            nodeArgs: ['--debug-brk'],
            env: {
              PORT: process.env.PORT || 8080
            },
            callback: function(nodemon) {
              nodemon.on('log', function(event) {
                console.log(event.colour);
              });

              //opens browser on initial server start
              nodemon.on('config:update', function() {
                setTimeout(function() {
                  require('open')('http://localhost:8080');
                }, 500);
              });
            }
          }
        }
      }
  });



  grunt.registerTask('serve', [
    'jshint', 
    'express:dev',
    'open'
  ]);
};