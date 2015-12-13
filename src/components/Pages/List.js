import React from 'react';
import CandidateItem from '../Candidate/Item/Item';
import Search from '../Candidate/Search/Search';

export default class CandidateList extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <div>
          <CandidateItem dataNumber={0} colorCycle={1}/>
          <CandidateItem dataNumber={1} colorCycle={2}/>
          <CandidateItem dataNumber={2} colorCycle={3}/>
          <CandidateItem dataNumber={3} colorCycle={4}/>
        </div>
      </div>
    );
  }
}
