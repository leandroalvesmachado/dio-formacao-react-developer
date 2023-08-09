import { useState, useEffect, useMemo } from "react";

const Teste = () => {
  const [name, setName] = useState('Leandro');

  const handleChangeName = () => {
    setName('Machado');
    // setName(prev => prev === 'Leandro' ? 'Alves' : 'Machado');
  }

  const changeUser = () => {
    handleChangeName();
  }

  useEffect(() => {
    // alert('renderizei');

    // return () => {
    //   alert('renderizei return')
    // }

    handleChangeName();
  }, []);

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste };