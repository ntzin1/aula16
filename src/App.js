import React from 'react';
import Contador from './components/Contador';
import BotaoAlternador from './components/BotaoAlternador';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  return (
    <div>
      <h1>Exercícios React</h1>
      <section>
        <h2>Exercício 1: Contador</h2>
        <Contador />
      </section>

      <section>
        <h2>Exercício 2: Botão Alternador</h2>
        <BotaoAlternador />
      </section>

      <section>
        <h2>Exercício 3: Lista de Tarefas</h2>
        <ListaDeTarefas />
      </section>
    </div>
  );
}

export default App;
