import React from 'react';
import './Header.less';

var CandidateHeader = React.createClass({
  render() {
    return (
        <div className="header--container0">
          <div className="header--text col-xs-12">
            <span className="header--name col-xs-12">Nome do candidato</span>
          </div>
          <div className="header--img col-xs-12">
          </div>
          <div className="col-xs-3">
            <br/><br/>
            <span className="header--team">Partido</span>
          </div>
        </div>
    );
  }
});

export default CandidateHeader;
