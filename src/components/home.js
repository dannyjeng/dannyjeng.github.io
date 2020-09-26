import React, { Component } from 'react';
import NavigationBar from './navbar';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavigationBar />
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;
