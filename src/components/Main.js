require('normalize.css');
require('styles/App.css');

let yeomanImage = require('../images/yeoman.png');

import React from 'react';
import {Link} from 'react-router';

class AppComponent extends React.Component {
  handleClick() {
    console.log('AAH');
  }
  render() {
    return (
      <div className="CandidateScan component">
        <div className="camera">
          <img src={yeomanImage} alt="Yeoman Generator" />
        </div>
        <div className="container">
          <Link to="/test" onClick={this.handleClick}>
            <button type="submit" className="btn btn-success btn-block enter">Lista de candidados</button>
          </Link>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
