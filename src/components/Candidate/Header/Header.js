import React from 'react';
import './Header.less';

var CandidateHeader = React.createClass({
  render() {
    return (
    <div className="container-fuid header" id="principal">
      <div className="row">
        <div className="col-xs-12">
          <h3 className="text">NOME DO POLITICO</h3>
          <h3 className="pull-right partido text">PSDB</h3>
            <div className="header-img">
              <div className="line-img">
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
});

export default CandidateHeader;
