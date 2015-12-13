import axios from 'axios';
import reqwest from 'reqwest';

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

  getMockCandidates() {
    return axios.get(`${this.apiUrl}/${this.apiPath}?estado=rj&cargo=6`);
  }

  filterCandidateByState(name, state) {
    return axios.get(`${this.apiUrl}/${this.apiPath}?estado=${state}&nome=${name}`);
  }

  getCandidateByFoto(screenshot) {
    return reqwest({
      url: `${this.apiUrl}/procura`
      , type: 'json'
      , method: 'post'
      , contentType: 'application/json'
      , crossOrigin: true
      , data: JSON.stringify({image: screenshot})
    })
  }
}

export default new Fetcher();
