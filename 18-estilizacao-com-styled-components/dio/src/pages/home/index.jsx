import { Link } from "react-router-dom";

import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button title="teste 1" />
      <Button title="teste 2" variant="secondary" />
      <Link to="/login">Ir para o login</Link>
    </>
  )
};

export { Home };