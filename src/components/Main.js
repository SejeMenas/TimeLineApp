require('normalize.css');
require('styles/App.css');

import React from 'react';
import {Link} from 'react-router';

class AppComponent extends React.Component {
  handleClick() {
    console.log('AAH');
  }
  render() {
    return (
      <div className="index">
        <Link to="/test" onClick={this.handleClick}><button>AH CARLAHO PORRA</button></Link>
        <div className="notice">Please edit, or not <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
