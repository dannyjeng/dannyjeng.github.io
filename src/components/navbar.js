import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar
                sticky="top"
                bg="dark"
                variant="dark">
                    <Navbar.Brand>
                        Danny Jeng
                    </Navbar.Brand>
                    <Nav>
                        {/* Using href will make page refresh.*/}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;
