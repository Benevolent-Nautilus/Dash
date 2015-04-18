'use strict';
// Router
var Router = require('react-router');
// React Fork
var Fork = require('react-ghfork');
// Actions
var actions = require('../../actions/actions');
//Components
var FullTable = require('./full_table.jsx');
var EditorsTable = require('./editors_table.jsx');

module.exports = React.createClass({
    displayName: 'App',
    render() {
        return (
            <div className='pure-g'>
                <Fork className='right' project='bebraw/reactabular' />
                <header className='pure-u-1'>
                    <h1>Reactabular</h1>

                    <div className='description'>Spectacular tables for React.js</div>
                </header>
                <article className='pure-u-1'>
                    <section className='demonstration'>
                        <div className='description'>
                            <h2>Demonstration</h2>

                            <p>The demo below shows basic features of Reactabular. Besides usual pagination, sorting and filtering by search it is possible to modify various fields by clicking them. In addition you may edit rows by hitting the arrow at the end of each. `x` will remove the row in question.</p>

                            <p>Most of this functionality is optional and has been plugged on top of a small core. The rest is just basic React.js code.</p>

                            <p>There are hooks for connecting with data stores (ie. Flux architecture) and the library has been developed extensibility in mind. Ideally you shouldnt have to modify the library itself to get something done.</p>
                        </div>

                        <FullTable />
                    </section>
                    <section className='editors'>
                        <div className='description'>
                            <h2>Editors</h2>

                            <p>The table below contains some sample editors you can use. It is possible to develop your own editors as long as you follow the same interface (`value`, `onValue` props).</p>
                        </div>

                        <EditorsTable/>
                    </section>
                    <section className='documentation'>
                        <h2>README</h2>

                        <div dangerouslySetInnerHTML={{__html: readme}}></div>
                    </section>
                </article>
            </div>
        );
    },
});
// var Competition = React.createClass({
//   propTypes: {
//     data: React.PropTypes.array
//   },

//   render: function() {
//     return (
//       <div className="container">
//         <div className="row">
//         <ul>
//           { this.props.data.map(function(friend) {
//             return <Friend key={friend.uid} name={friend.name} device={friend.device} uid={friend.uid}  />
//           })}
//         </ul>
//         </div>
//       </div>
//     );
//   }
// });

// module.exports = Competition;