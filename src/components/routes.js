import React from 'react';

import Main from './Pages/Main';
import CandidateList from './Pages/CandidateList';

import { Router, Route } from 'react-router';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Main}>
          <Route path="list" component={CandidateList}></Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;
