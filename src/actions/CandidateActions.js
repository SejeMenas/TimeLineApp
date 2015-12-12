import flux from '../flux';

// import Fetcher from 'utils/Fetcher';

class CandidateActions {
  fetchCandidate(name) {
    const candidato = {};
    candidato = name;
    this.dispatch(candidato);
  }
}
export default flux.createActions(CandidateActions);
