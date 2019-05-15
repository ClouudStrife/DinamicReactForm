import React from 'react';
import Question from './components/Question';



class Form extends React.Component {
    state = {
        questions:[]
    }


    insertQuestion = () =>{
        this.setState({questions: [...this.state.questions,<Question/>]});
    }

    render(){
        return (
            <div className="container">
                { this.state.questions }
                <button onClick={this.insertQuestion}>Add</button>
            </div>
        );
    }
  }
  
  export default Form;