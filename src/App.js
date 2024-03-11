import Container from '@mui/material/Container';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App" style={{background: 'linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(56,19,19,1) 65%, rgba(255,0,0,1) 100%)', width:'100%'}}>
      <Container>
        <Navbar/>
      </Container>
    </div>
  );
}

export default App;
