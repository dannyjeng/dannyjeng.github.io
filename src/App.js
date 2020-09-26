import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/page_not_found';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/about"} component={About} />
              <Route exact path={"/contact"} component={Contact} />
              <Route path={"*"} component={PageNotFound} />
          </Switch>
      </Router>
  );
}

export default App;
