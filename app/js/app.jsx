window.React = require('react');
var HelloWorldComponent = require('./components/HelloWorldComponent.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <HelloWorldComponent/>
      </div>
    );
  }
});



module.exports = App;


React.render(<App />, document.getElementById('main-js'));