var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../../actions/actions');
var Reactable = require('reactable'),
    Table = Reactable.Table,
    Tr = Reactable.Tr,
    Td = Reactable.Td;


var Friends = React.createClass({
  
  mixins: [
    require('react-router').Navigation,
  ],

  // When the View loads up, get the data from the Store
  componentDidMount: function() {
      // store the node on the `this.node` so we can access elsewhere
      this.node = this.getDOMNode();
      var dialog = $(this.node).dialog().data('ui-dialog');

      // moved this code so we can call it in other places
      this.renderDialogContent();
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
    return (
      <div className="table-responsive search-friends table-hover" >
        <Table className="table table-hover" id="table" filterable={['Name', 'Device']}>
            {this.props.data.map(function(friend){
              return (
                  <Tr className="search-tr">
                      <Td column="">
                        <div className="profile-circle"></div>
                      </Td>
                      <Td column="Name" data={friend.name}>
                      </Td>
                      <Td column="Device" data={friend.device}>
                      </Td>
                  </Tr>
              )
            })}
        </Table>
      </div>
    );
  }
});

module.exports = Friends;