import flux from '../flux';

import CheckoutActions from '../actions/CandidateActions';

class CheckoutStore {
  constructor() {
    this.bindActions(CheckoutActions);

    this.state = {
      candidatos: [];
    };
  }

  onFetchCandidate(candidato){
    this.setState({candidates: candidato});
    console.log('STORE: ', this.state.candidatos);
  }
}
export default flux.createStore(CandidateStore, 'CandidateStore');
