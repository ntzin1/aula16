import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setLista((prev) => [...prev, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    setLista((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index} onClick={() => removerTarefa(index)} style={{ cursor: 'pointer' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
