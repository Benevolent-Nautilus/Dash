/**
@fileOverview 
<p>Profile.js - This will be where the application will load profile for curated views</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
var profileStore = require('../stores/profileStore');
var userStore = require('../stores/userStore');
// Components
var Spinner = require('../components/spinner');

var Profile = React.createClass({

    mixins: [
        require('react-router').Navigation,
        Reflux.listenTo(profileStore, 'onLoaded')
    ],

    getInitialState: function() {
        return {
        	profileData: profileStore.getDefaultData(),
        	isLoading: true
        };
    },

    statics: {

        willTransitionTo: function(transition, params, query, callback) {
            // set callback to watch current user's posts/comments
            userStore.getUserId(params.username).then(function(userId) {
                actions.listenToProfile(userId);
                return callback();
            });
        },

        willTransitionFrom: function(transition, component) {
            actions.stopListeningToProfile();
            component.setState({
                isLoading: true
            });
        }
        
    },

    onLoaded: function(profileData) {
    	this.setState({
    		profileData: profileData,
    		isLoading: false
    	});
    },

    logout: function(e) {
        e.preventDefault();
        actions.logout();
        this.transitionTo('home');
    },

    render: function() {
        var user = this.props.user;
    	var profileData = this.state.profileData;
    	var posts = profileData.posts;
    	var comments = profileData.comments;

        var postList = false,
        	commentList = false,
        	postHeader,
        	commentsHeader;

        if (this.state.isLoading) {
        	postHeader = <h2>Loading Posts...</h2>;
            postList = <Spinner />;
        	commentsHeader = <h2>Loading Comments... <Spinner /></h2>;
            commentList = <Spinner />;
        } else {
        	postHeader = <h2>{ posts.length ? 'Latest' : 'No'} Posts</h2>;
        	commentsHeader = <h2>{ comments.length ? 'Latest' : 'No'} Comments</h2>;

        	postList = posts.map(function(post) {
        		return <Post post={ post } user={ user } key={ post.id } />;
        	});
        	commentList = comments.map(function(comment) {
        		return <Comment comment={ comment } user={ user } key={ comment.id } showPostTitle={ true } />;
        	});
        }

        return (
            <div className="content full-width">
                {
                    user.uid !== this.state.profileData.userId ? '' : (
                        <div className="user-options text-right">
                            <button onClick={ this.logout } className="button button-primary">Sign Out</button>
                        </div>
                    )
                }
	            <h1>{ this.props.params.username + '\'s' } Profile</h1>
                <div className="user-posts">
                    { postHeader }
	                { postList }
                </div>
                <div className="user-comments">
                    { commentsHeader }
	                { commentList }
                </div>
            </div>
        );
    }

});

module.exports = Profile;