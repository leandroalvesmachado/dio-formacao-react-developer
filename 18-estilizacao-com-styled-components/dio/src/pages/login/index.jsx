import { Link } from "react-router-dom";
// import bannerImage from "../../assets/banner-play.png";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null} />
        </div>
        <div>
          <img src={''} alt="Imagem principal" />
        </div>
      </Container>
    </>
  )
};

export { Login };