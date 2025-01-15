import React from 'react';
import { TemaProvider } from './context/TemaContext';
import FocoInput from './components/FocoInput';
import Cronometro from './components/Cronometro';
import ExibirTema from './components/ExibirTema';
import AlternarTema from './components/AlternarTema';

function App() {
  return (
    <TemaProvider>
      <div>
        <h1>Exercícios React</h1>
        <h2>Exercício 1: Foco no Input</h2>
        <FocoInput />
        <h2>Exercício 2: Cronômetro</h2>
        <Cronometro />
        <h2>Exercício 3: Contexto de Tema</h2>
        <ExibirTema />
        <AlternarTema />
      </div>
    </TemaProvider>
  );
}

export default App;
