'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var CurrentChallengeHeader = React.createClass({
  render: function(){
    return (
        <div className="challenge-header">
         <div className="info bounceIn animated">
           <span>Challenge</span>
           <img src={ this.props.img } />
           <h2>{ this.props.name }</h2>
         </div>
        </div>
    ) 
  }
})

module.exports = CurrentChallengeHeader;


