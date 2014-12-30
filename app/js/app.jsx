window.React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <p>Hello world !</p>
      </div>
    );
  }
});



module.exports = App;


React.render(<App />, document.getElementById('main-js'));