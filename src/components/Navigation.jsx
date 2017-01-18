var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;
var Well = Bootstrap.Well;
var Grid = Bootstrap.Grid;
var PageHeader = Bootstrap.PageHeader;

var LinkContainer = require('react-router-bootstrap').LinkContainer;

var Navigation = React.createClass({

    render: function() {
        return (
            <div>
                <Navbar inverse collapseOnSelect className="header-panel shadow-z-2">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Golf News</a>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                          <Nav>
                            <LinkContainer to="/articles">
                                <NavItem eventKey={1}>Articles</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/images">
                                <NavItem eventKey={2}>Images</NavItem>
                            </LinkContainer>
                          </Nav>
                          <Nav pullRight>
                            <Navbar.Text>
                                <Navbar.Link href="https://twitter.com/hashtag/golf" target="_blank"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></Navbar.Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Navbar.Link href="https://www.facebook.com/SI.Golf/" target="_blank"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></Navbar.Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Navbar.Link href="https://www.instagram.com/explore/tags/golf/?hl=en" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></Navbar.Link>
                            </Navbar.Text>
                          </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
});

module.exports = Navigation;