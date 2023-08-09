import { useState, useEffect, useMemo, useCallback } from "react";

const Teste = () => {
  const [name, setName] = useState('Leandro');
  const [age, setAge] = useState(38);

  const handleChangeName = () => {
    setName('Machado');
    // setName(prev => prev === 'Leandro' ? 'Alves' : 'Machado');
  }

  const changeUser = () => {
    handleChangeName();
  }

  // memoriza uma função, para que nao seja executada o tempo todo
  // evita renderizações desnecessarias
  const handleChangeAge = useCallback(() => {
    setAge(40);
  });

  // useEffect(() => {
  //   // alert('renderizei');

  //   // return () => {
  //   //   alert('renderizei return')
  //   // }

  //   handleChangeName();
  // }, []);

  // memoriza uma variavel, valor
  const calculo = useMemo(() => {
    console.log('calculando...');
    return 10 * 26589
  }, []);

  console.log('useMemo', calculo);

  return (
    <div>
      <p>{name}: {age}</p>
      <br />
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}

export { Teste };