import React from 'react';
import './App.css';
// import Card from './components/Card';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

import Intervalo from './components/Intervalo';

function App() {
    
  return (
    <div className="App">
      <h1>Exercícios React-Redux (simples)</h1>
      <div className='linha'>
        <Intervalo
        />
      </div>
      <div className='linha'>
        <Media prop1="abc" prop2="def"></Media>
        <Soma >x</Soma>
        <Sorteio >x</Sorteio>
      </div>
    </div>
  );
}

export default App;
