var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;

var Navigation = React.createClass({

    render: function() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Golf News</a>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                      <Nav>
                        <NavItem href="/">Articles</NavItem>
                        <NavItem href="/images">Images</NavItem>
                      </Nav>
                      <Nav pullRight>
                        <NavItem href="https://twitter.com/hashtag/golf"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></NavItem>
                        <NavItem href="https://www.facebook.com/SI.Golf/"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></NavItem>
                        <NavItem href="https://www.instagram.com/explore/tags/golf/?hl=en"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></NavItem>
                      </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

module.exports = Navigation;