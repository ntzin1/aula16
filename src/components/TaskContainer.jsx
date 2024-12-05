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