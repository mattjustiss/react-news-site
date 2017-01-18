var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Navigation = require('./components/Navigation.jsx');
var Landing = require('./components/Landing.jsx');
var Articles = require('./components/Articles.jsx');
var Images = require('./components/Images.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Navigation}>
                    <IndexRoute component={Landing}/>
                    <Route path="/articles" component={Articles}/>
                    <Route path="/images" component={Images}/>
                </Route>
            </Router>
        )
    }
});

module.exports = Routes;