'use strict';

var Footer = React.createClass({
  render: function() {
    return (
        <div className="footer">
            <div className="row">
              <a href="#/dashboard">
                <div className="col-xs-3 col-sm-3 footer-tab dashboard-tab">
                </div>
              </a>
              <a href="#/friends">
                <div className="col-xs-3 col-sm-3 footer-tab friends-tab">
                </div>
              </a>
              <a href="#/challenges">
                <div className="col-xs-3 col-sm-3 footer-tab challenges-tab">
                </div>
              </a>
              <a href="#/login">
                <div className="col-xs-3 col-sm-3 footer-tab settings-tab">
                </div>
              </a>
            </div>
        </div>
    );
  }
});

module.exports = Footer;