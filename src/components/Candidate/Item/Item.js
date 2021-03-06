import React from 'react';
import {Link} from 'react-router';
import './Item.less';

import CandidateStore from '../../../stores/CandidateStore';

export default class CandidateItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Candidate: CandidateStore.getState()
    };

    this.onCandidateChange = this.onCandidateChange.bind(this);
  }

  onCandidateChange(state) {
    this.setState({Candidate: state});
  }

  componentDidMount() {
    CandidateStore.listen(this.onCandidateChange);
  }

  componentWillUnmount() {
    CandidateStore.unlisten(this.onCandidateChange);
  }

  render() {
    var colorCycle = this.props.colorCycle;
    var dataNumber = this.props.dataNumber;
    return (
      <Link to="timeline">
        <div className={`item--container${colorCycle}`}>
          <div className="item--img col-xs-2">
            <img src={this.state.Candidate.foto[dataNumber]} className="item--foto" />
          </div>
          <div className="col-xs-8 item--text">
            <span className="item--name">{this.state.Candidate.nome[dataNumber]}</span>
            <br/>
            <span className="item--team">{this.state.Candidate.partido[dataNumber]}</span>
          </div>
        </div>
      </Link>
    );
  }
}
