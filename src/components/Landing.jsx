var React = require('react');
var Bootstrap = require('react-bootstrap');
var Jumbotron = Bootstrap.Jumbotron;


var Landing = React.createClass({
   render: function() {
       return (
           <Jumbotron>
                <h1>Welcome to this golf news site!</h1>
                <p>Some news articles and cool images await. Use the navigation to look around.</p>
            </Jumbotron>
        );
   }
});

module.exports = Landing;