### Documentação dos Componentes Criados

Esta documentação fornece uma explicação detalhada sobre cada componente desenvolvido para os exercícios de `useRef` e `useContext` no React, bem como o propósito de cada um.

---

### **1. FocoInput**
#### **Propósito**
O componente `FocoInput` permite que o usuário clique em um botão para focar automaticamente em um campo de entrada de texto. Ele demonstra o uso do hook `useRef` para acessar uma referência ao elemento DOM.

#### **Código**
```jsx
import React, { useRef } from 'react';

function FocoInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Foca no input
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo" />
      <button onClick={handleFocus}>Focar no Input</button>
    </div>
  );
}

export default FocoInput;
```

#### **Explicação do Código**
1. **useRef:** Cria uma referência ao elemento DOM do input.
2. **handleFocus:** Usa a referência para chamar o método `focus()` e dar foco no campo de entrada.
3. **Estrutura:** O componente inclui um campo de entrada e um botão que aciona o foco.

---

### **2. Cronometro**
#### **Propósito**
O componente `Cronometro` é um cronômetro que permite iniciar, pausar e resetar uma contagem de segundos. Ele demonstra o uso de `useRef` para armazenar a referência do `setInterval`.

#### **Código**
```jsx
import React, { useState, useRef } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (!intervaloRef.current) {
      intervaloRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const resetar = () => {
    pausar();
    setSegundos(0);
  };

  return (
    <div>
      <h1>Cronômetro: {segundos}s</h1>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

export default Cronometro;
```

#### **Explicação do Código**
1. **useState:** Gerencia o estado da contagem de segundos.
2. **useRef:** Armazena a referência do timer criado com `setInterval`.
3. **Funções:**
   - **iniciar:** Inicia o cronômetro se ele não estiver em execução.
   - **pausar:** Pausa o cronômetro limpando o intervalo.
   - **resetar:** Pausa o cronômetro e reseta a contagem para zero.

---

### **3. TemaContext (Contexto de Tema)**
#### **Propósito**
Este contexto permite alternar entre os temas claro e escuro em uma aplicação React. Ele utiliza `useContext` para compartilhar o estado do tema entre diferentes componentes.

#### **Código do Contexto**
**Arquivo:** `TemaContext.jsx`
```jsx
import React, { createContext, useState, useContext } from 'react';

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
```

#### **Componentes Associados**

**a) ExibirTema**
- Exibe o tema atual (claro ou escuro).

**Código:**
```jsx
import React from 'react';
import { useTema } from '../context/TemaContext';

function ExibirTema() {
  const { tema } = useTema();

  return <h1>Tema atual: {tema}</h1>;
}

export default ExibirTema;
```

**b) AlternarTema**
- Permite alternar entre os temas claro e escuro.

**Código:**
```jsx
import React from 'react';
import { useTema } from '../context/TemaContext';

function AlternarTema() {
  const { alternarTema } = useTema();

  return <button onClick={alternarTema}>Alternar Tema</button>;
}

export default AlternarTema;
```

#### **Componente Principal**
- Combina todos os componentes e prove o contexto de tema.

**Código:**
```jsx
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
```

#### **Explicação do Fluxo**
1. **TemaContext:** Gerencia o estado do tema e fornece a função para alternâ-lo.
2. **ExibirTema:** Usa o contexto para mostrar o tema atual.
3. **AlternarTema:** Usa o contexto para alternar o tema entre claro e escuro.
4. **App:** Envolve os componentes no `TemaProvider` para que todos possam acessar o contexto.

---

Se precisar de mais detalhes ou ajustes, é só avisar!








![alt text](image-1.png)
## Alterações Realizadas

1. **Uso de Estado no `TaskContainer`**:
   - Substituímos a lista estática de tarefas por um estado gerenciado com o hook `useState`.
   - Inicializamos o estado com a lista de tarefas existente.

2. **Função `addTask`**:
   - Criamos uma função que gera uma nova tarefa com um `id` único, um título fixo e uma descrição.
   - Atualizamos a lista de tarefas usando o método `setTasks`, adicionando a nova tarefa à lista existente.

3. **Adição de um Botão**:
   - Incluímos um botão acima da lista de tarefas.
   - O botão chama a função `addTask` ao ser clicado, adicionando uma nova tarefa à lista.

## Resultado
Ao clicar no botão "Adicionar Tarefa", uma nova tarefa é adicionada dinamicamente à lista e exibida no componente.

## Arquivos Modificados
### `TaskContainer.js`
- Implementação do estado com `useState`.
- Adição da função `addTask`.
- Inclusão de um botão para interação com a lista.







![alt text](image.png)
# **Task Manager - Documentação**

Este projeto é um gerenciador de tarefas simples construído com React. Ele exibe uma lista de tarefas com título e descrição e permite modularizar os componentes React para melhor organização.

## **Componentes Criados**
Abaixo está a descrição de cada componente criado no projeto:

---

### **1. Header**
**Descrição:** O componente `Header` é responsável por exibir o título principal do projeto.

**Código do componente:**
```jsx
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Gerenciador de Tarefas</h1>
    </header>
  );
}

export default Header;
```

**Explicação do código:**
- O componente retorna um elemento `<header>` com um título `<h1>` que contém o nome do projeto.
- É um componente funcional simples que não possui estado ou propriedades.

---

### **2. Task**
**Descrição:** O componente `Task` é responsável por renderizar uma tarefa individual, exibindo o título e a descrição passados como `props`.

**Código do componente:**
```jsx
import React from 'react';
import PropTypes from 'prop-types';

function Task({ title, description }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
```

**Explicação do código:**
- O componente usa **props** para receber o `title` (título da tarefa) e `description` (descrição da tarefa).
- A validação das `props` é feita usando o pacote `prop-types`, garantindo que `title` e `description` sejam do tipo string e obrigatórios.
- Retorna um bloco `<div>` que contém um `<h3>` para o título e um `<p>` para a descrição.

---

### **3. TaskContainer**
**Descrição:** O componente `TaskContainer` é responsável por renderizar uma lista de tarefas. Ele utiliza o componente `Task` para exibir cada tarefa individual.

**Código do componente:**
```jsx
import React from 'react';
import Task from './Task';

function TaskContainer() {
  const tasks = [
    { id: 1, title: 'Estudar React', description: 'Estudar os fundamentos do React e criar um projeto simples.' },
    { id: 2, title: 'Comprar Mantimentos', description: 'Ir ao mercado para comprar frutas, vegetais e laticínios.' },
    { id: 3, title: 'Fazer Exercícios', description: 'Praticar yoga e uma corrida leve no parque.' },
    { id: 4, title: 'Assistir Filme', description: 'Assistir a um filme de comédia para relaxar.' },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
```

**Explicação do código:**
- Define um array `tasks` com 4 tarefas, onde cada tarefa possui `id`, `title` e `description`.
- Usa o método `.map()` para iterar sobre o array `tasks` e renderizar um componente `Task` para cada item.
- Passa `title` e `description` como `props` para o componente `Task`.
- A `key` única para cada tarefa é o `id`, para garantir que o React gerencie a lista corretamente.

---

### **4. App**
**Descrição:** O componente `App` é o componente principal do projeto. Ele organiza e integra os componentes `Header` e `TaskContainer`.

**Código do componente:**
```jsx
import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskContainer />
    </div>
  );
}

export default App;
```

**Explicação do código:**
- Importa os componentes `Header` e `TaskContainer`.
- Renderiza os dois componentes em uma estrutura simples dentro de uma `<div>` com a classe `"App"`.
- Serve como ponto de entrada do aplicativo.