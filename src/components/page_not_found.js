import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './page_not_found.css';

class PageNotFound extends Component {
    render() {
        return (
            <div className="center">
                <h1>No Results Found</h1>
                <p>The page you requested could not be found.</p>
                <Button 
                variant="outline-dark"
                as={Link}
                to="/">
                   Return Home 
                </Button>
            </div>
        )
    }
}

export default PageNotFound;
