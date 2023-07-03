import { useEffect, useState } from "react";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [count, setCount] = useState("");
  const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  }

  useEffect(() => {

  },[]);

  return (
    <div className="App">
      <h1>Hello DIO!</h1>
      <div>
        <input 
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <hr />
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  )
}

export default App;