import React from 'react';
import './TimeLine.less';

var calendario = require('../../../images/calendar-01.png');

export default class CandidateTimeLine extends React.Component {

  render() {
    return (
      <div className="timeline container">
        <div className="header-img2">
          <div className="header-img-detail-right first">
            <img src={calendario} className="img"/>
            <div className="year-right">2015</div>
          </div>
          <div className="header-img2">
            <div className="header-img-detail-left second">
              <img src={calendario} className="img"/>
              <div className="year-left">2014</div>
            </div>
              <div className="header-img2">
                <div className="header-img-detail-right third">
                  <img src={calendario} className="img"/>
                  <div className="year-right">2013</div>
                  </div>
                <div className="header-img2">
                  <div className="header-img-detail-left fourth">
                    <img src={calendario} className="img"/>
                    <div className="year-left">2012</div>
                  </div>
                </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
