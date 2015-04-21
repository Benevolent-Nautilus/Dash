// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var CurrentChallenge = React.createClass({

  mixins: [
    require('react-router').Navigation
  ],

  moreDetails: function(uid) {
    console.log(uid);
    window.location.href='#/current-challenges/'+ uid;
  },

  render: function(){
    return (
        <li key={this.props.uid}>
          <div className="competition-box tracker" onClick={ this.moreDetails.bind(this, this.props.uid) }>
            <div className="col-xs-4 col-md-4 line-right">
              <img src="../../../images/challenge.png" />
              <h4>{this.props.name}</h4>
            </div>
            <div className="col-xs-8 col-md-8 competition-text text-right">
              <span className="competition-score">
                <span className="competition-accumulated">{this.props.currentSteps}</span> / <span className="competition-total">{this.props.goal}</span>
              </span>
              <span>Total Steps  |  {this.props.amountOfFriends} Players</span>
            </div>
          </div>
        </li>
      );
  }

})

module.exports = CurrentChallenge;