import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
}  
from './styles';
import Button from '../Button';
import logo from "../../assets/dio.png";
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" width={60} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
              <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
        {autenticado ? (
          <UserPicture src="https://avatars.githubusercontent.com/u/5203915?v=4" />
        ) : (
          <>
            <MenuRight href='#'>Home</MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
          </>
        )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;
