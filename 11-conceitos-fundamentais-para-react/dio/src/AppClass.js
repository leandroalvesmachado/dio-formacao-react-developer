// exemplo de componente de classe no react (antigo)
import React, { Component, useEffect, useState } from "react";

// class App extends Component {
//   state = {
//     usuarios: ["Pablo", "José", "Manoel"]
//   };

//   render() {
//     const { usuarios } = this.state;

//     return (
//       <div className="App">
//         <h1>Hello DIO!</h1>
//         {usuarios.map((item) => (
//           <p>{item}</p>
//         ))}
//       </div>
//     );
//   }
// }

// convertendo componente acima de classe para funcional
const App = () => {
  const [usuarios, setUsuarios] = useState(
    ["Pablo", "José", "Manoel"]
  );

  useEffect(() => {
    setTimeout(() => {
      setUsuarios([...usuarios, "Ismael"])
    }, 3000)
  }, []);

  return (
    <div className="App">
      <h1>Hello DIO!</h1>
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
