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
    var nomes = [];
    var partidos = [];
    var fotos = [];
    nomes.push(data[0].nome);
    partidos.push(data[0].partido);
    fotos.push(data[0].foto);
    this.setState({nome: nomes, partido: partidos, foto: fotos});
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
