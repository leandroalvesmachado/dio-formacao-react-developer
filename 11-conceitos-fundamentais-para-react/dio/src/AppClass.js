// exemplo de componente de classe no react (antigo)
import React, { Component } from "react";

class App extends Component {
  state = {
    usuarios: ["Pablo", "José", "Manoel"]
  };

  render() {
    const { usuarios } = this.state;

    return (
      <div className="App">
        <h1>Hello DIO!</h1>
        {usuarios.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}