var React = require('react');
var Bootstrap = require('react-bootstrap');
var ArticleContainer = require('./ArticleContainer.jsx');
var fs = require('fs');
var articlesJSON = fs.readFileSync(__dirname + '/data/Articles.json', 'utf8');
var articlesData = JSON.parse(articlesJSON);

var ArticlesPage = React.createClass({
   getInitialState: function() {
       // var articlesData is an array of objects
       return ({items: articlesData});
   },
   
   render: function() {
       return (
            <ArticleContainer items={this.state.items}/>
        );
   }
});

module.exports = ArticlesPage;