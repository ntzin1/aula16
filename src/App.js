import React from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> ba13adccff5a6da99942fe87b2707d7d065bae61
  );
}

export default App;
