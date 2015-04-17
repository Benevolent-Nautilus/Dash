'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');

// store listener references
var postListener, commentListener;


var profileStore = Reflux.createStore({
    listenables: actions,

    getDefaultData: function(details){
        $.ajax({
            url: 'http://demo7018697.mockable.io/user',
            async: false,
            dataType: 'json',
            success: function(data) {
                this.categories = categoryData;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        });
        return this.categories;
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