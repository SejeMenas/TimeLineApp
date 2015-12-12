import React, {PropTypes} from 'react';
import './TimeLine.less';

export default class CandidateHistory extends React.Component {

  render() {
    return (
      <div className="timeline--container">
        <div className="timeline--text">
          <br/><br/><br/>
          <p>{this.props.candiData}</p>
        </div>
      </div>
    );
  }
}
