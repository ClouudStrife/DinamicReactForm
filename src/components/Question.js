import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            tipoQuestao: "aberta",
            privacidade: "",
            pergunta: "",
            respostas: []
        };
        this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
    this.setState({tipoQuestao: event.target.value});
    if(event.target.value == "fechada"){
        this.setState({ respostas: [<Answer/>]})
    }
    else{
        this.setState({ respostas: ""})
    }   
  }

    render(){
        const tipoQuestao = this.state.tipoQuestao;
        
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
                { this.state.respostas }
            </div>
        );
    }
  }
  
  export default Question;