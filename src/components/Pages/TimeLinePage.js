import React from 'react';
import CandidateHeader from '../Candidate/Header/Header';
import TimeLine from '../Candidate/TimeLine/TimeLine';


export default class CandidateTimeLine extends React.Component {

  render() {
    return (
      <div>
        <CandidateHeader colorCycle={0}/>
        <TimeLine/>
      </div>
    );
  }
}
