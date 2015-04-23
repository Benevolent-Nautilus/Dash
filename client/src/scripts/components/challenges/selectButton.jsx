'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var Spinner = require('../spinner');

var SelectChallenge = React.createClass({
  getInitialState: function(){
    return {selected: false}
  },

  addChallenge: function(uid){
    window.location.href='#/join-challenges/'+ uid;
  },

  render: function() {
    return (
      <button onClick= { this.addChallenge.bind(this, this.props.data.id) }>Select Challenge</button>
    )
  }

});

module.exports = SelectChallenge;