var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var Articles = require('./components/Articles.jsx');
var Images = require('./components/Images.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Articles} />
                <Route path="/images" component={Images} />
            </Router>
        )
    }
});

module.exports = Routes;