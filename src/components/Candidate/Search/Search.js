import React, {PropTypes} from 'react';
import './Search.less';
import Fetcher from '../../../fetcher';

export default class CandidateList extends React.Component {

  testRequest(e){
    e.preventDefault();
    console.log(
      Fetcher.getPresident('Dilma Rousseff').then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log('candidato não encontrado: ', err);
      })
    );
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
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary" onClick={this.testRequest}>OK</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
