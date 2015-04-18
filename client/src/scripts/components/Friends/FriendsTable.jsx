var Reactable = require('reactable');
var Reflux = require('reflux');
var actions = require('../../actions/actions');
var Reactable = require('reactable');
var Table = Reactable.Table;

var Friends = React.createClass({
  
  mixins: [
    require('react-router').Navigation,
  ],

  // When the View loads up, get the data from the Store
  getInitialState: function() {
    return {
    };
  },

  // When there is a change in the store, the method recieves an updated note list and changes the state. 
  onChange: function(friends) {
    this.setState({
    });
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
  },

  componentWillUnmount: function() {
    // this will remove the listener.
    // will always stay up-to-date by listening to the Store's change event
  },

  render: function() {
    console.log('Friends', this.state.friendsList)
    return (
       <Table className="table" id="table" data={this.props.data} filterable={['name', 'email']} />
    );
  }
});

module.exports = Friends;