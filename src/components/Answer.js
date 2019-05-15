import React from 'react';


class Answer extends React.Component{
    state = {
        alternativas:[],
    }

 insert = () => {
    let alternativa = <p>nova alternativa: <input type="text"/></p>;
    this.setState({ alternativas:[...this.state.alternativas, alternativa]});
  }

  render(){
      return (
          <div>
              { this.state.alternativas }
              <button onClick={ this.insert }>nova alternativa</button>
          </div>
      );
  }
}

export default Answer;