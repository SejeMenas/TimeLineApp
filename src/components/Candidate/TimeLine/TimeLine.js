import React from 'react';
import './TimeLine.less';

export default class CandidateTimeLine extends React.Component {

  render() {
    return (
      <div className="timeline container">
        <div className="header-img2">
          <div className="header-img-detail-right first">
            <div>
            </div>
            <div className="year-right">2015</div>
          </div>
          <div className="header-img2">
            <div className="header-img-detail-left second">
              <div className="year-left">2014</div>
            </div>
              <div className="header-img2">
                <div className="header-img-detail-right third">
                  <div className="year-right">2013</div>
                  </div>
                <div className="header-img2">
                  <div className="header-img-detail-left fourth">
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
