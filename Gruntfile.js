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
      }
  });



  grunt.registerTask('serve', [
    'jshint', 
    'express:dev'
  ]);
};