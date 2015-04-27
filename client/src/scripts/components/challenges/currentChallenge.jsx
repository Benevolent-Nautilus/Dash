'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var CurrentChallenge = React.createClass({

  mixins: [
    require('react-router').Navigation,
    require('../../mixins/formatNumber')
  ],

  render: function(){
    var currentSteps = (this.props.currentSteps === undefined) ? null : this.formatNumber(this.props.currentSteps) + ' /' ;
    var amountOfFriends = (this.props.amountOfFriends === undefined) ? null : " |  " + this.props.amountOfFriends + " Players" ;
    var goal = this.formatNumber(this.props.goal);

    var details = (currentSteps === null) ? "Join Challenge" : "Details";
    var url = (currentSteps === null) ? "#/join-challenges/" + this.props.uid : "#/challenges/" + this.props.uid;

    return (
        <li key={this.props.uid} className="fadeInUp animated">
          <a href={ url }>
            <div className="challenge-box">
              <div className="col-xs-4 col-md-4 line-right">
                <img src={ this.props.img } />
                <h4>{ this.props.name }</h4>
              </div>
              <div className="col-xs-8 col-md-8 competition-text text-right">
                <span className="competition-score">
                  <span className="competition-accumulated">{ currentSteps }</span>
                  <span className="competition-total">{ goal }</span>
                </span>
                <span>Total Steps { amountOfFriends }</span>
              </div>
            </div>
            <div className="row text-right">
              <button className="btn btn-lg half-width challenges-btn">{ details }</button>
            </div>
          </a>
        </li>
      );
  }

})

module.exports = CurrentChallenge;