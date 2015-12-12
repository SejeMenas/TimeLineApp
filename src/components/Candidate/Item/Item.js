import React from 'react';
import {Link} from 'react-router';
import './Item.less';

var CandidateItem = React.createClass({
  render() {
    var colorCycle = this.props.colorCycle;
    return (
      <Link to="timeline">
        <div className={`item--container${colorCycle}`}>
          <div className="item--img col-xs-2">
          </div>
          <div className="col-xs-8 item--text">
            <span className="item--name">Nome do candidato</span>
            <br/>
            <span className="item--team">Partido</span>
          </div>
        </div>
      </Link>
    );
  }
});

export default CandidateItem;
