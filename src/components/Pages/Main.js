import React from 'react';
import {Link} from 'react-router';
import CandidateScan from '../Candidate/Scan/Scan';

import '../../styles/main.less';
let scan = require('../../images/scan.png');

class AppComponent extends React.Component {
  click() {
    location.reload();
  }
  render() {
    return (
      <div className="CandidateScan component">
        <div className="camera">
          <img src={scan} className="camera--img" alt="scan" />
          <CandidateScan />
        </div>
        <div className="instruction">
          <Link to='/list' onClick={this.click}>
            <span className="col-xs-12 instruction--text">
              Aponte sua câmera para ter o reconhecimento facial automático do candidato
            </span>
            <button className="col-xs-offset-1 col-xs-10 btn gotolist">
              <span onClick={this.click} className="instruction--text">Candidados</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
