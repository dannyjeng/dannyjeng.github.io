import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class NavigationBar extends Component {
    render() {
        return (
            <>
                <Navbar
                sticky="top"
                bg="dark"
                variant="dark"
                expand='lg'>
                    <Container>
                    <Navbar.Brand>
                        Danny Jeng
                    </Navbar.Brand>
                    <Nav>
                        {/* Using href will make page refresh.*/}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavigationBar;
