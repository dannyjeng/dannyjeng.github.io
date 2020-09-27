import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar
                className="sticky-top"
                bg="dark"
                variant="dark">
                    <Navbar.Brand>
                        Danny Jeng
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;
