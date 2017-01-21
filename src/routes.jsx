var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Navigation = require('./components/Navigation.jsx');
var Landing = require('./components/Landing.jsx');
var ArticlesPage = require('./components/ArticlesPage.jsx');
var Images = require('./components/ImagesPage.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Navigation}>
                    <IndexRoute component={Landing}/>
                    <Route path="/articles" component={ArticlesPage}/>
                    <Route path="/images" component={Images}/>
                </Route>
            </Router>
        )
    }
});

module.exports = Routes;