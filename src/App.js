import './App.css';
// import Card from './components/Card';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercícios React-Redux(simples)</h1>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha'>
        {/* <Card title="card 2" blue>x</Card>
        <Card title="card 3" green>x</Card>
        <Card title="card 4" purple>x</Card> */}
        <Media title="card 2" blue>x</Media>
        <Soma title="card 3" green>x</Soma>
        <Sorteio title="card 4" purple>x</Sorteio>
      </div>
    </div>
  );
}

export default App;
