import axios from 'axios';

class Fetcher {
  constructor() {
    this.candidateSections = ['estado','nome','matricula'];
    this.apiUrl = '/candidatos';
  }

  getPresident(name) {
    return axios.get(`/${this.apiUrl}?estado=brasil&nome=${name}`);
  }

  getRjCandidate(name) {
    return axios.get(`/${this.apiUrl}?estado=rj&nome=${name}`);
  }

  filterCandidateByState(name, state) {
    return axios.get(`/${this.apiUrl}?estado=${state}&nome=${name}`);
  }
}

export default new Fetcher();
