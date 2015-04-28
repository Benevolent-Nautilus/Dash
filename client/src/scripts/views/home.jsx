/**
@fileOverview 
<p>Home.js - The main point of interest for home</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
var $ = jQuery;
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
// Components
var Spinner = require('../components/spinner');
/**
@description This is the Home class.  The Routes will basically load this as a view once the user goes to anywhere on the site with the path '/'. 
The reason why is important to note is because of the nested components inside the View. 
- Banner will load its respective view
- Info will load its respective view

All of which is nested inside the file! Remember that everything gets refed to the app.jsx file through the module.exports at the bottom of the page. 
@class Home
*/
var Home = React.createClass({
  mixins: [],

  getInitialState: function() {
    var width = $(window).width();
    if(width < 1024) { 
      window.location.href="#/login";
    }
    $('#app').css('background-color', '#78c9fd');
    return {};
  },

  componentDidMount: function() {
  },

  render: function() {
    var team = [
            { 
              id: "001",
              name: "Dennis Yang",
              img: "../../images/dennis-yang.jpg",
              linkedin: "https://www.linkedin.com/in/yangdennis",
              github: "https://github.com/Sunyang730",
            },
            { 
              id: "002",
              name: "Derek van Dyke",
              img: "../../images/derek-van-dyk.jpg",
              linkedin: "https://www.linkedin.com/in/ddvandyke",
              github: "https://github.com/dvandyke",
            },
            { 
              id: "003",
              name: "Jason Chang",
              img: "../../images/jason-chang.jpg",
              linkedin: "https://www.linkedin.com/in/jasonjchang",
              github: "https://github.com/jasonjchang",
            },
            { 
              id: "004",
              name: "Scott Kao",
              img: "../../images/scott-kao.jpg",
              linkedin: "https://www.linkedin.com/in/scottkao85",
              github: "https://github.com/scottkao85",
            }
            ];
    return (
      <div className="text-center">
        <br/><br/>
        <div className="fadeInUp animated text-center">
          <img src="../../images/dash-splash.png" width="1030px" height="540px" className="splash-image" />
        </div>
        <div className="fadeInUp animated text-center">
          <a href="https://github.com/Benevolent-Nautilus/Benevolent-Nautilus" target="_blank">
            <button className="github-btn"><i className="fa fa-github-square"></i> Contribute On Github</button>
          </a>
        </div>
        <div className="row tech-stack-row">
          <span className="tech-stack">
            <h4>Dash.io is built using state-of-the-art technologies such as</h4>
          </span>
          <span className="tech-stack">
            <img src="../../images/tech-table_01.png" width="319" height="81" alt="" />
            <img src="../../images/tech-table_02.png" width="89" height="81" alt="" />
            <img src="../../images/tech-table_03.png" width="207" height="81" alt="" />
            <img src="../../images/tech-table_04.png" width="173" height="81" alt="" />
            <img src="../../images/tech-table_05.png" width="224" height="81" alt="" />
          </span>
          <span className="tech-stack">
            <img src="../../images/tech-table_06.png" width="223" height="87" alt="" />
            <img src="../../images/tech-table_07.png" width="96" height="87" alt="" />
            <img src="../../images/tech-table_08.png" width="89" height="87" alt="" />
            <img src="../../images/tech-table_09.png" width="195" height="87" alt="" />
            <img src="../../images/tech-table_10.png" width="199" height="87" alt="" />
            <img src="../../images/tech-table_11.png" width="198" height="87" alt="" />
          </span>
          <span className="tech-stack">
            <img src="../../images/tech-table_12.png" width="223" height="64" alt="" />
            <img src="../../images/tech-table_13.png" width="81" height="64" alt="" />
            <img src="../../images/tech-table_14.png" width="139" height="64" alt="" />
            <img src="../../images/tech-table_15.png" width="128" height="64" alt="" />
            <img src="../../images/tech-table_16.png" width="205" height="64" alt="" />
            <img src="../../images/tech-table_17.png" width="227" height="64" alt="" />
          </span>
        </div>
        <div className="row team">
          <div className="container">
            { team.map(function(member){
              var profileImage = { 
                        "background": 'url(' + member.img + ')',
                        "backgroundSize": "auto 100%",
                        "backgroundPosition" : "center",
                        "width" : "150px",
                        "height" : "150px",
                        "margin" : "20px auto"
                      };
              return (
                      <div key={member.id} className="col-xs-3 col-sm-3 text-center">
                        <div>
                          <div className="profile-circle" style={ profileImage }></div>
                          <div className="user-details">
                            <span>
                              { member.name }
                            </span>
                            <span className="device">
                              Software Engineer
                            </span>
                            <div className="row text-center portfolio">
                              <a href={member.github} target="_blank">
                                <i className="fa fa-github-square"></i>
                              </a>
                              <a href={member.linkedin} target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
            }) }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;