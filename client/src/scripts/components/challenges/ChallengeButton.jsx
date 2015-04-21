/**
@fileOverview 
<p>Jawbone.js - Component for Jawbone </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var Spinner = require('../spinner');

/**
@description Class Dedicated to Jawbones API requests while rendering a button.
@class Jawbone
*/
var Jawbone = React.createClass({
  mixins: [
    Router.Navigation
  ],

  transitionPage: function(e){
    e.preventDefault();
    var type = this.props.type;
    console.log('clicked current challenge');
    this.transitionTo(type);

  },

  render: function() {
    // var error = this.state.error ? <div className="error login-error">{ this.state.error }</div> : '';
    return (
        <div className="text-center">
          <button type="button" className="btn btn-lg full-width top-bottom-margin challenges-btn edged-width" aria-label="Jawbone" onClick={ this.transitionPage }>
            <h2>{ this.props.name }</h2>
          </button>
        </div>
      );
    }
});

module.exports = Jawbone;