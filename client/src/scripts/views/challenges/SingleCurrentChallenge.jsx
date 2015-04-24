// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Store
var ChallengesStore=require('../../stores/challengesStore');
// Components
var Spinner = require('../../components/spinner');
var Header = require('../../components/profile/Header');
var Footer = require('../../components/profile/Footer');


var SingleCurrentChallenge = React.createClass({
  mixins: [ Router.State ],

  getInitialState: function() {
    var id = this.getParams().challengeid;
    ChallengesStore.fetchSingleChallenge(id);
    return { 
        data: ChallengesStore.getSingleChallenge()
    };
  }, 

  render: function() {
    console.log('path url', this.state.data);
    return (
      <div className="text-center">
        <Header />
            <h2>{this.state.data.name}</h2>
            <div className="tracker">
              <div className="tracker-header">
                <h4>Total Steps</h4>
              </div>
              <div className="tracker-data">
                <h2>{ this.state.data.currentSteps } / { this.state.data.goal }</h2>
                <span>Total Steps</span>
              </div>
            </div>
            { this.state.data.friends.map(function(friend) {
              return ( <div className="competition-box tracker">
                <div className="col-xs-4 col-md-4 line-right">
                  <img src="../../../images/challenge.png" />
                  <h4>{friend.name}</h4>
                </div>
                <div className="col-xs-8 col-md-8 competition-text text-right">
                  <span className="competition-score">
                    <span className="competition-accumulated">{friend.currentSteps}</span> / <span className="competition-total"></span>
                  </span>
                  <span>Total Steps</span>
                </div>
              </div> )
            }) }
        < Footer />
      </div>
    );
  }
});
module.exports = SingleCurrentChallenge;