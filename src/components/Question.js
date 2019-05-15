import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
   constructor(props){
        super(props);
        this.state = {tipoQuestao: "aberta"};
        this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
    this.setState({tipoQuestao: event.target.value});
  }

    render(){
        const tipoQuestao = this.state.tipoQuestao;
        let respostas;

        if(tipoQuestao == "fechada"){
            respostas = <Answer />;
        }
        else{
            respostas = null;
        }
        return (
            <div className="container">
                <p><label>Nome questão: <input type="text"/></label></p>
                <p><label>
                Tipo Questão:
                <select onChange={ this.handleChange }>
                    <option value="aberta">Aberta</option>
                    <option value="fechada">Fechada</option>
                </select>
                </label></p>
                {respostas}
            </div>
        );
    }
  }
  
  export default Question;