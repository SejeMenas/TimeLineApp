import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Pages/Main';
import CandidateList from './Pages/CandidateList';

import { Router, Route } from 'react-router';

const routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/list" component={CandidateList}></Route>
    </Route>
  </Router>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
