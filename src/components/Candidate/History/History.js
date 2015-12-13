import React from 'react';
import './History.less';

class CandidateHistory extends React.Component {

  render() {
    return (
      <div className="container-fuid">
        <div className="row" id="detalhe">
          <div className="header-img-left col-xs-3">
          </div>
          <div className="col-xs-6 text-left text">
            <span>O NOME DO POLITICO</span>
            <br></br><br></br>
            <span>2015</span>
          </div>
        </div>

        <div className="history container" id="content-main">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla nec lorem pretium porttitor. Cras faucibus efficitur fringilla. Etiam at rhoncus orci. Morbi elementum felis ut imperdiet lobortis. Aliquam in orci mauris. Fusce suscipit nec nisi sodales facilisis. Vestibulum leo ex, laoreet eu est vel, eleifend congue eros. Proin sit amet dui id sem porttitor viverra. </p>
          <p>Etiam hendrerit vel massa ac convallis. Vivamus condimentum tempor sollicitudin. Aenean pulvinar erat eu arcu pulvinar lacinia. Etiam eu mollis sapien. Nulla placerat dolor vitae dui aliquam, a dignissim metus bibendum. Fusce tellus tellus, porta non lacinia vel, volutpat eget risus. Integer ultrices augue aliquam, elementum lectus id, maximus augue. Praesent augue orci, lobortis a sagittis sed, pretium non tortor.</p>
        </div>
    </div>
    );
  }
}

export default CandidateHistory;
