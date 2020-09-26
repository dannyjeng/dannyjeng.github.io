import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

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
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;
