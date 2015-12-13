import flux from '../flux';
import Fetcher from '../fetcher';

class CandidateActions {

  fetchCandidate(name) {
    Fetcher.getPresident(name).then((response) => {
      console.log(response.data);
      this.dispatch(response.data);
    }).catch((err) => {
        console.log('candidato não encontrado: ', err);
    });
  }
}
export default flux.createActions(CandidateActions);
