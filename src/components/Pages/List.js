import React from 'react';
import CandidateItem from '../Candidate/Item/Item';
import Search from '../Candidate/Search/Search';

export default class CandidateList extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <div>
          <CandidateItem colorCycle={1}/>
          <CandidateItem colorCycle={2}/>
          <CandidateItem colorCycle={3}/>
          <CandidateItem colorCycle={4}/>
        </div>
      </div>
    );
  }
}
