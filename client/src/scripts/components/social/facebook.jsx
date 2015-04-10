'use strict';

var Reflux = require('reflux');

var Router = require('react-router');

// actions
var actions = require('../../actions/actions');

// components
var Spinner = require('../spinner');

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
        var self = this;
        console.log('ajax call for facebook component!');
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
            <div className="text-center">
              <button className="button button-primary" onClick={ this.registerUser }>
                 { this.state.submitted ? <Spinner /> : 'Register with Facebook' }
              </button>
              { error }
            </div>
        );
    }

});

module.exports = Register;