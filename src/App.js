import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/page_not_found';

import NavigationBar from './components/navbar';

import './App.css';

function App() {
  return (
      <>
          <NavigationBar />
          <Container>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/home"}>
                   <Redirect to="/" />;
                </Route>
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/contact"} component={Contact} />
                <Route path={"*"} component={PageNotFound} />
              </Switch>
          </Container>
      </>
  );
}

export default App;
