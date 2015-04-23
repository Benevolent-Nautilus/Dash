// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var SelectButton = require('./SelectButton');


var AvailableChallenge = React.createClass({
  render: function(){
    console.log(this.props.data);
    return (
      <li>
        {this.props.data.name} | {this.props.data.goal} 
        <SelectButton data={this.props.data} />   
      </li>
    ) 
  }
})

module.exports = AvailableChallenge;


