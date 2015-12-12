import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Pages/Main';
import CandidateList from './Pages/List';
import CandidateTimeLine from './Pages/TimeLinePage';

import { Router, Route, IndexRoute } from 'react-router';

const routes = (
  <Router>
    <IndexRoute component={Main} />
    <Route path="/" component={Main} />
    <Route path="/list" component={CandidateList} />
    <Route path="/timeline" component={CandidateTimeLine} />
  </Router>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
