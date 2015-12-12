import flux from '../flux';

import CandidateActions from '../actions/CandidateActions';

class CandidateStore {
  constructor() {
    this.bindActions(CandidateActions);

    this.state = {
      nome: 'MOCK',
      partido: 'MOCK',
      foto: '',
      image: ''
    };
  }

  onFetchCandidate(data){
    this.setState({nome: data[0].nome, partido: data[0].partido, foto: data[0].foto});
  }
}
export default flux.createStore(CandidateStore, 'CandidateStore');
