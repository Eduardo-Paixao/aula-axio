import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Cep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retorno : '',
      cep : 60525571
    };
  }

  componentDidMount(){
    this.buscarCEP();
    
  }

  componentDidUpdate(){
    this.buscarCEP();    
  }


  buscarCEP(){
    axios.get('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      .then(x => this.setState({ retorno : x.data}))
      .catch(erro => console.log(erro))
  }

  definirCEP(event){
    this.setState({ cep : event.target.value});
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.cep} onChange={this.definirCEP.bind(this)}></input>
        <div>
          Logradouro1: {this.state.retorno.logradouro}
        </div>
        <div>
          Cidade: {this.state.retorno.localidade}
        </div>
      </div>
    );
  }
}

export default Cep;
