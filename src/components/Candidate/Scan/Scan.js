import React from 'react';
import CandidateActions from '../../../actions/CandidateActions';
import Webcam from 'react-webcam';
import './Scan.less';

class Scan extends React.Component {
  click(){
    var screenshot = this.refs.webcam.getScreenshot();
    CandidateActions.fetchCandidateByFoto(screenshot);
  }
  render() {
    return (
      <div onClick={this.click.bind(this)}>
        <Webcam height={300} ref="webcam" audio={false} className="camera--webcam"/>
      </div>
    );
  }
}
export default Scan;
