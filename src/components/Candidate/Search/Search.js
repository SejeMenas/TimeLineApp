import React, {PropTypes} from 'react';
import './Search.less';

export default class CandidateList extends React.Component {

  render() {
    return (
      <div className="search--container">
        <form className="text-center col-xs-10 col-xs-offset-1" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Busque seu candidato"
              autoComplete="off"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">OK</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
