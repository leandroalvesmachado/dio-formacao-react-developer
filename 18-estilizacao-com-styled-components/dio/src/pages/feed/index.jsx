import { Card } from "../../components/Card";
import Header from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo nome="Leandro" percentual={35} image="https://avatars.githubusercontent.com/u/5203915?v=4" />
          <UserInfo nome="Leandro" percentual={15} image="https://avatars.githubusercontent.com/u/5203915?v=4" />
          <UserInfo nome="Leandro" percentual={75} image="https://avatars.githubusercontent.com/u/5203915?v=4" />
          <UserInfo nome="Leandro" percentual={85} image="https://avatars.githubusercontent.com/u/5203915?v=4" />
          <UserInfo nome="Leandro" percentual={95} image="https://avatars.githubusercontent.com/u/5203915?v=4" />
        </Column>
      </Container>
    </>
  )
};

export { Feed };