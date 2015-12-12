require('normalize.css');
require('styles/App.css');

import React from 'react';

import './CandidateScan.less';

let yeomanImage = require('../../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="CandidateScan component">
        <div className="camera">
          <img src={yeomanImage} alt="Yeoman Generator" />
        </div>
        <div className="container">
          <span>
            <button type="submit" className="btn btn-success btn-block enter">Lista de candidados</button>
          </span>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
