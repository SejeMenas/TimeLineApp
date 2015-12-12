import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Pages/Main';
import Test from './Pages/Test';

import { Router, Route } from 'react-router';

const routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/test" component={Test}></Route>
    </Route>
  </Router>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
