import React from 'react';
import './History.less';

export default class CandidateHistory extends React.Component {

  render() {
    return (
      <div className="history--container">
        <div className="history--text">
          <br/><br/><br/>
          <p>{this.props.candiData}</p>
        </div>
      </div>
    );
  }
}
