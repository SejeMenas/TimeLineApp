import React, {PropTypes} from 'react';
import CandidateItem from '../Candidate/Item/Item';
import Search from '../Candidate/Search/Search';

export default class CandidateList extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <div>
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </div>
      </div>
    );
  }
}
