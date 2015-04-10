'use strict';

var Reflux = require('reflux');

// actions
var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('../components/spinner');

var Register = React.createClass({

    mixins: [
    ],

    getInitialState: function() {
        return {
        };
    },

    registerUser: function(e) {
        // e.preventDefault();

        // this.refs.submit.getDOMNode().disabled = true;
        // this.setState({
        //     submitted: true
        // });

        // var loginData = {
        //     email: this.refs.email.getDOMNode().value.trim(),
        //     password: this.refs.password.getDOMNode().value.trim()
        // };
        // var username = this.refs.username.getDOMNode().value.trim();
        // actions.register(username, loginData);
    },

    render: function() {
        return (
            <div className="post-info inner full-height">
                <div className="text-center">
                  <h1>Connect Your Device</h1>
                  <button className="button button-primary">FitBit</button>
                  <button className="button button-primary">JawBone</button>
                </div>
            </div>
        );
    }

});

module.exports = Register;