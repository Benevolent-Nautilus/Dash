'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');

// Private variable to hold dashboard data
var _userInfo = {};

var profileStore = Reflux.createStore({

  // listens to the actions stores as a whole.
  listenables: actions,

  init: function() {
    this.userId = '';
    this.name = '';
    this.stepsToday = 0;
    this.dailyGoal = 0;
    this.totalSteps = 0;
    this.competitions = [];
    // Listen to actions and register callbacks
    // this.listenTo(actions.loadDashboard, this.getDefaultData);
    // this.listenTo(actions.updateDashboard, this.updateDashboard);
  },

  fetchUserData: function(){
     console.log('AJAX button pressed');
     $.ajax({
         url: 'http://demo7018697.mockable.io/user',
         async: false,
         dataType: 'json',
         success: function(data) {
          console.log(data);
          //Divide up data into new initialized object
            this.userId = data.msg;
            this.name = data.name;
            this.stepsToday = data.steps_today;
            this.dailyGoal = data.daily_goal;
            this.totalSteps = data.steps_total;
            this.competitions = data.competitions;
         }.bind(this),
         error: function(xhr, status, err) {
             console.error(url, status, err.toString());
         }.bind(this)
     });
  },

  createDashboard: function() {
    this.fetchUserData();
    return {
              userId: this.userId,
              name: this.name,
              stepsToday: this.stepsToday,
              dailyGoal: this.dailyGoal,
              totalSteps: this.totalSteps,
              competitions: this.competitions
            };
  },

  updateDashboard: function() {
     console.log('Update Dashboard Commenced in Store');
     this.fetchUserData();
     this.triggerAll();
  },

  triggerAll: function () {
      this.trigger({
          userId: this.userId,
          name: this.name,
          stepsToday: this.stepsToday,
          totalSteps: this.totalSteps,
          dailyGoal: this.dailyGoal,
          competitions: this.competitions
      });
  },

});

// var profileStore = Reflux.createStore({

//     listenables: actions,

//     init: function() {
//         this.userId = '';
//         this.posts = [];
//         this.comments = [];
//     },

//     listenToProfile: function(userId) {
//         this.userId = userId;
//         postListener = postsRef.orderByChild('creatorUID').equalTo(userId).limitToLast(3)
//             .on('value', this.updatePosts.bind(this));
//         commentListener = commentsRef.orderByChild('creatorUID').equalTo(userId).limitToLast(3)
//             .on('value', this.updateComments.bind(this));
//     },

//     stopListeningToProfile: function() {
//         postsRef.off('value', postListener);
//         commentsRef.off('value', commentListener);
//     },

//     updatePosts: function(posts) {
//         this.posts = [];
//         posts.forEach(function(postData) {
//             var post = postData.val();
//             post.id = postData.key();
//             this.posts.unshift(post);
//         }.bind(this));
//         this.triggerAll();
//     },

//     updateComments: function(comments) {
//         this.comments = [];
//         comments.forEach(function(commentData) {
//             var comment = commentData.val();
//             comment.id = commentData.key();
//             this.comments.unshift(comment);
//         }.bind(this));
//         this.triggerAll();
//     },

//     triggerAll: function () {
//         this.trigger({
//             userId: this.userId,
//             posts: this.posts,
//             comments: this.comments
//         });
//     },

//     getDefaultData: function() {
//         return {
//             userId: this.userId,
//             posts: this.posts,
//             comments: this.comments
//         };
//     }
// });

module.exports = profileStore;