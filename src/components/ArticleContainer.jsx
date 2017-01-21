var React = require("react");
var Article = require("./Article.jsx");

var ArticleContainer = React.createClass({
   render: function () {
       
       var createItem = function(item) {
           return <Article key={item.id} authorImage={item.authorImage} title={item.title} subHead={item.subHead} text={item.text} thumbnail={item.thumbnail} location={item.location}/>
       };
       
       return (<div>{this.props.items.map(createItem)}</div>);
    }
});

module.exports = ArticleContainer;