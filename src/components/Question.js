import React from 'react';
import Answer from './Answer';

class Question extends React.Component {
   constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
    const text = event.target.value;
    const fieldName = event.target.name;
    this.props.onChange(this.props.id, fieldName, text); 
  }

    render(){
        let output;
        if(this.props.questao.tipoQuestao == "fechada"){
            output = <Answer id = { this.props.id } tipoResposta = { this.props.questao.tipoResposta } respostas = { this.props.questao.respostas }
            onChange = {this.props.onChange}/>
        }
        else{
            output = null;
        }
        return (
            <div className="container">
                <p><label>Nome questão: <input type="text" name = "nomeQuestao" onChange = { this.handleChange }/></label></p>
                <p><label>
                Tipo Questão:
                <select name = "tipoQuestao" onChange={ this.handleChange }>
                    <option value="aberta">Aberta</option>
                    <option value="fechada">Fechada</option>
                </select></label></p>
                { output }
            </div>
        );
    }
  }
  
  export default Question;