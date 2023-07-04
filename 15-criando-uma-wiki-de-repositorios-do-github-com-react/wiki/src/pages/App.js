import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img
        src={gitLogo}
        width={192}
        height={192}
        alt="Logo"
      />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
