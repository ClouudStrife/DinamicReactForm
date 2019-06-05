import React from 'react';


class Answer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          tipoResposta:"Multipla", 
          textoAlternativa: "",
          alternativas: [{ textoAlternativa: "" }]       
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
   }

 insert = () => {
   this.setState({ alternativas: this.state.alternativas.concat([{ textoAlternativa: "" }])})
  }

  handleChange(event){
     switch(event.target.value){
       case "mu":
         this.setState({tipoResposta:"Multipla"});
       break;
       case "ch":
          this.setState({tipoResposta:"Checkbox"});
       break;
       case "es":
          this.setState({tipoResposta:"Escalar"});
       break;
     }
  }

  handleInputChange = idx => evt =>{

    const text = evt.target.value;
    const fieldName = evt.target.name;
    this.props.onChange(this.props.id, fieldName, text, idx); 
  }
  
  render(){
      let inputResposta;
      if(this.props.tipoResposta == "Multipla" || this.props.tipoResposta == "Checkbox"){
        inputResposta = this.props.respostas.map((resposta, idx) => 
          <p>Alternativa <input type="text"  name="resposta" onChange={this.handleInputChange(idx)} /></p>
        );
      }
      else{
        inputResposta = <p>Escalar</p>;
      }
      
      return (
          <div>
              <p><label>Tipo resposta:                  
                <select onChange={ this.handleChange }>
                        <option value="mu">Múltipla</option>
                        <option value="ch">Checkbox</option>
                        <option value="es">Escalar</option>
                </select>
              </label></p>
              { inputResposta }
               
              <button onClick={ this.insert }>Nova alternativa</button>   
                      
          </div>
          
      );
  }
}

export default Answer;