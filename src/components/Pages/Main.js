import React from 'react';
import {Link} from 'react-router';

import '../../styles/main.less';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="CandidateScan component">
        <div className="camera">
          <br/><br/><br/><br/><br/><br/><br/>
          <span className="col-xs-12 camera--text">This is a space reserved to camera scan</span>
        </div>
        <div className="instruction">
          <Link to='list'>
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
