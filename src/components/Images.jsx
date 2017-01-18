var React = require('react');
var Bootstrap = require('react-bootstrap');
var Well = Bootstrap.Well;

var Images = React.createClass({
   render: function() {
       return (
            <Well>
                <h1>Images</h1>
            </Well>
        );
   }
});

module.exports = Images;