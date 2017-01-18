var React = require("react"),
    ReactDOM = require("react-dom"),
    Routes = require("./routes.jsx"),
    Navigation = require("./components/Navigation.jsx");
    
ReactDOM.render(React.createElement(Navigation), document.getElementById("navbar"));
ReactDOM.render(React.createElement(Routes), document.getElementById("main")); 