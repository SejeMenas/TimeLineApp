import React from 'react';
import './Search.less';
import CandidateActions from '../../../actions/CandidateActions';

let lupa = require('../../../images/lupa-01.png');

export default class CandidateList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    CandidateActions.fetchCandidate(this.state.query);
  }

  render() {
    return (
      <div className="search--container">
        <form className="text-center col-xs-10 col-xs-offset-1" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="buscar candidatos"
              autoComplete="off"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn search--button">
                <img src={lupa} className="search--img" alt="scan" />
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
