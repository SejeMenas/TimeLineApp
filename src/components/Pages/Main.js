import React from 'react';
import {Link} from 'react-router';
import Webcam from 'react-webcam';

import '../../styles/main.less';

class AppComponent extends React.Component {
  click() {
    console.log(Link);
  }
  render() {
    return (
      <div className="CandidateScan component">
        <div className="camera">
          <Webcam height={300} audio={false} className="camera--webcam"/>
        </div>
        <div className="instruction">
          <Link to='list' onClick={this.click}>
            <span className="col-xs-12 instruction--text">
              Aponte sua câmera para ter o reconhecimento facial automático do candidato
            </span>
            <button className="col-xs-offset-1 col-xs-10 btn gotolist">
              <span className="instruction--text">Candidados</span>
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
