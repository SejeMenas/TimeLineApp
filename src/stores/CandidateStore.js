import flux from '../flux';

import CandidateActions from '../actions/CandidateActions';

class CandidateStore {
  constructor() {
    this.bindActions(CandidateActions);

    this.state = {
      nome: [],
      partido: [],
      foto: []
    };
  }

  onFetchCandidate(data){
    this.setState({nome: data[0].nome, partido: data[0].partido, foto: data[0].foto});
  }

  onGetMockCandidates(data){
    var nomes = [];
    var partidos = [];
    var fotos = [];
    data.forEach(function (item, index) {
      nomes.push(item.nome)
      partidos.push(item.partido)
      fotos.push(item.foto)
    });

    this.setState({nome: nomes, partido: partidos, foto: fotos});
    console.log('nomes: ', nomes, 'partiods: ',partidos,'fotos: ',fotos);
  }
}
export default flux.createStore(CandidateStore, 'CandidateStore');
