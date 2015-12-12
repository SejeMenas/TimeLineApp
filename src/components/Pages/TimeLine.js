import React from 'react';
import CandidateHeader from '../Candidate/Header/Header';
import CandidateHistory from '../Candidate/History/History';

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mi ut ligula interdum, vel congue sem lobortis. Vestibulum facilisis dolor dolor, sit amet molestie nibh dignissim id. Aenean rhoncus elit eget volutpat accumsan. In purus diam, venenatis a scelerisque sed, fermentum eu tortor. Aliquam dui sem, eleifend eu lobortis nec, mattis nec augue. Phasellus non ligula porttitor, blandit nisl non, convallis nisl. Sed vulputate lectus vitae dolor rutrum efficitur. Nulla nec tincidunt elit. Proin sit amet quam non massa ultricies ultrices.';

export default class CandidateTimeLine extends React.Component {

  render() {
    return (
      <div>
        <CandidateHeader colorCycle={0}/>
        <CandidateHistory candiData={text} />
      </div>
    );
  }
}
