var React = require('react');
var Bootstrap = require('react-bootstrap');
var Well = Bootstrap.Well;


var Articles = React.createClass({
   render: function() {
       return (
            <Well>
                <h1>Articles</h1>
            </Well>
        );
   }
});

module.exports = Articles;