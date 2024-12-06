import React, { useState } from 'react';
import Task from './Task';

function TaskContainer() {
  const initialTasks = [
    { id: 1, title: 'Estudar React', description: 'Estudar os fundamentos do React e criar um projeto simples.' },
    { id: 2, title: 'Comprar Mantimentos', description: 'Ir ao mercado para comprar frutas, vegetais e laticínios.' },
    { id: 3, title: 'Fazer Exercícios', description: 'Praticar yoga e uma corrida leve no parque.' },
    { id: 4, title: 'Assistir Filme', description: 'Assistir a um filme de comédia para relaxar.' },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: 'Nova Tarefa',
      description: 'Esta é uma tarefa adicionada dinamicamente.',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <button onClick={addTask} style={{ marginBottom: '20px' }}>
        Adicionar Tarefa
      </button>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
