import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async() => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    }
  }

  // remover
  const handleRemoveRepo = (id) => {
    alert(id)
  }

  return (
    <Container>
      <img
        src={gitLogo}
        width={192}
        height={192}
        alt="Logo"
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => 
        <ItemRepo
          repo={repo}
          handleRemoveRepo={handleRemoveRepo} 
        />
      )}
    </Container>
  );
}

export default App;
