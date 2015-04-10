'use strict';

var Reflux = require('reflux');

var Router = require('react-router');

// actions
var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('../components/spinner');

var Register = React.createClass({

    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            // error message - set default blank
            error: '',
            // submitted set to false, this is purely for the spinner
            submitted: false
        };
    },

    registerUser: function(e) {
        e.preventDefault();
        console.log('ajax call for facebook!');
        var self = this;
        // Prefill Here with Login Information

        //this setState edits the state
        self.setState({
            submitted: true
        });
        //Transition later
        self.transitionTo('login');
    },

    // Function is built for error messages.  
    onErrorMessage: function(errorMessage) {
        this.refs.submit.getDOMNode().disabled = false;
        this.setState({
            error: errorMessage,
            submitted: false
        });
    },

    render: function() {
        var error = this.state.error ? <div className="error login-error">{ this.state.error }</div> : '';
        return (
            <div className="post-info inner full-height">
                <div className="text-center">
                  <h1>Sign Up With Facebook</h1>
                      <button className="button button-primary" onClick={ this.registerUser }>
                         { this.state.submitted ? <Spinner /> : 'Register with Facebook' }
                      </button>
                </div>
                { error }
            </div>
        );
    }

});

module.exports = Register;