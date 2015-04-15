var Footer = React.createClass({
  render: function() {
    return (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-3 col-sm-3 footer-tab">
              </div>
              <div className="col-xs-3 col-sm-3 footer-tab friends-tab">
              </div>
              <div className="col-xs-3 col-sm-3 footer-tab challenges-tab">
              </div>
              <div className="col-xs-3 col-sm-3 footer-tab settings-tab">
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Footer;