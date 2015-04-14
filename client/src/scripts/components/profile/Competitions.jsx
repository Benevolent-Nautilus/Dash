var LatestCompetition = require('./Competitions/Competition.jsx');

var Competition = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    return (
        <div className="container">
          <div className="row">
            <LatestCompetition data= { this.props.data.competitions[0] } />
          </div>
        </div>
    );
  }
});

module.exports = Competition;