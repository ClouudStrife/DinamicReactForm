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
    const novasAlternativas = this.state.alternativas.map((alternativa, sidx) => {
      if (idx !== sidx) return alternativa;
      return { ...alternativa, textoAlternativa: evt.target.value };
    });

    this.setState({ alternativas: novasAlternativas });  
  }
  
  render(){
      let inputResposta;
      console.log(this.state);
      if(this.state.tipoResposta == "Multipla" || this.state.tipoResposta == "Checkbox"){
        inputResposta = this.state.alternativas.map((alternativa, idx) => 
          <p>Alternativa <input type="text"  value={ alternativa.textoAlternativa } onChange={this.handleInputChange(idx)} /></p>
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