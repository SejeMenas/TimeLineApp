import flux from '../flux';

import CandidateActions from '../actions/CandidateActions';

class CandidateStore {
  constructor() {
    this.bindActions(CandidateActions);

    this.state = {
      nome: 'MOCK',
      partido: 'MOCK'
    };
  }

  onFetchCandidate(data){
    this.setState({nome: data[0].nome, partido: data[0].partido});
  }
}
export default flux.createStore(CandidateStore, 'CandidateStore');
