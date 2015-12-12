import axios from 'axios';

class Fetcher {
  constructor() {
    this.candidateSections = ['estado','nome','matricula'];
    this.apiPath = 'candidatos';
    this.apiUrl = 'https://hackpuc-30.herokuapp.com';
  }

  getPresident(name) {
    return axios.get(`${this.apiUrl}/${this.apiPath}?estado=br&nome=${name}`);
  }

  getCandidateByTeam(partido) {
    return axios.get(`${this.apiUrl}/${this.apiPath}?partido=${partido}`);
  }

  getRjCandidate(name) {
    return axios.get(`${this.apiUrl}/${this.apiPath}?estado=rj&nome=${name}`);
  }

  filterCandidateByState(name, state) {
    return axios.get(`${this.apiUrl}/${this.apiPath}?estado=${state}&nome=${name}`);
  }
}

export default new Fetcher();
