'use strict';

var request = require('supertest');
var expect = require('expect');
var should = require('should');
var mongoose = require('mongoose');
var User = require('../../server/db/user/user.model')
var app = require('../../server/app');

describe('GET requests', function(){
  it('to \'/\' sends you to the homepage', function(done) {
    request(app)
    .get('/')
    .expect(200)
    . end(function(err, res) {
      if(err){
        return done(err);
      } else {
        done();
      }
    });
  }); 
  it('to other directories redirect you to the homepage', function(){
    request(app)
    .get('/somethingElse')
    .expect(302)
    .end(function(err, res) {
      if(err) {
        return done(err);
      }
      done();
    });
  });
});

//get request to api/user api/users/friends api/users/friend /api/

describe('POST requests', function() {
  it('should return a 404 error', function(done) {
    request(app)
    .post('/')
    .expect(404)
    .end(function(err, rest) {
      if(err) {
        return done(err);
      } else {
        done();
      }
    });
  });
});

describe('User', function() {

  // before(function(done) {
  //   db = mongoose.connect('mongodb://localhost');
  //   done();
  // });

  // after(function(done) {
  //   mongoose.connection.close()
  //   done();
  // });

  beforeEach(function(done) {
    var user = new User ({
      name: {
        first: 'Elizabeth',
        last: 'Liangberg'
      },
      emailAddress: 'spflwmz_liangberg_1429226716@tfbnw.net',
      oauth: {
        facebook: {
          id: 1377248099272266
        }
      }
    });

    var user2 = new User ({
      name: {
        first: 'Derek',
        last: 'Van Dyke'
      },
      emailAddress: 'haoled@gmail.com',
      oauth: {
        facebook: {
          id: 1377248099272200
        }
      }
    });

    user.save(function(error) {
      if(error) {
        // console.log('error: ' + error.message);
      } else {
        // console.log('no error');
      }
    });

    user2.save(function(error) {
      if(error) {
        // console.log('error: ' +error.message)
      } else {
        // console.log('no error');
      }
      done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropCollection('users', function(err, result) {
      if(err){
        // console.log(err);
      }
      done();
    })
  });

  it('find a user by email', function(done) {
    User.findOne({emailAddress: 'spflwmz_liangberg_1429226716@tfbnw.net'}, function(err, user) {
      if(err){}
      // console.log(user);
      user.name.first.should.eql('Elizabeth');
      user.name.last.should.eql('Liangberg');
      done();
    });
  });

  it('should return an error if trying to save duplicate email', function(done) {
      var u = {name: {
        first: 'Liz',
        last: 'Lemon'
      },
      emailAddress: 'spflwmz_liangberg_1429226716@tfbnw.net',
      oauth: {
        facebook: {
          id: 1377248099272266
        }
      }
    };
    var failUser = new User (u);
    failUser.save(function(error, user) {
      // console.log(error);
      should.exist(error);
      done();
    });
  });
});