import React from 'react';
import Question from './components/Question';



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions:[],
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }


    insertQuestion = () =>{
        let question ={
            nomeQuestao: "",
            tipoQuestao: "aberta",
            privacidade: "",
            tipoResposta: "Multipla",
            respostas: ["", "", ""]
        };

        this.setState({questions: [...this.state.questions, question]});
    }

    handleFieldChange(fieldId, fieldName, value, rIdx) {
        let question = this.state.questions;
        console.log(rIdx);
        if(fieldName != "resposta"){
            question[fieldId][fieldName] = value; 
        }
        else{
           question[fieldId].respostas[rIdx] = value;
        }
        this.setState({questions:question});
    }

    render(){
        console.log(this.state);
        let output = this.state.questions.map((question, idx) => 
            <Question questao = { question } id = { idx } onChange={this.handleFieldChange}/>
        );
        return (
            <div className="container">
                { output }
                <button onClick={this.insertQuestion}>Add</button>
            </div>
        );
    }
  }
  
  export default Form;