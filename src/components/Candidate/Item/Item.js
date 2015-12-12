import React from 'react';
import './Item.less';

var CandidateItem = React.createClass({
  render() {
    return (
      <div className="item--container">
        <div className="item--img col-xs-2">
        </div>
        <div className="col-xs-8 item--text">
          <span className="item--name">Nome do candidato</span>
          <br/>
          <span className="item--team">Partido</span>
        </div>
      </div>
    );
  }
});

export default CandidateItem;
