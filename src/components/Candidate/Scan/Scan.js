import React from 'react';

import Webcam from 'react-webcam';
import './Scan.less';

class Scan extends React.Component {
  render() {
    return (
      <Webcam height={300} audio={false} className="camera--webcam"/>
    );
  }
}
export default Scan;
