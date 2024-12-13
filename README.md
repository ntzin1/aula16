# Documentação dos Componentes Criados

## **1. Componente Contador**
### **Descrição:**
O componente `Contador` implementa um contador simples que pode ser incrementado ou decrementado. Ele utiliza o hook `useState` para gerenciar o estado interno do contador e garante que o valor não fique negativo.

### **Código do Componente:**
```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador((prev) => prev + 1);
  const decrementar = () => setContador((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
}

export default Contador;
```

### **Explicação:**
1. **Importação de dependências:** O React e o hook `useState` são importados para o gerenciamento do estado.
2. **Estado do contador:** Criado com `useState(0)`, inicia o contador com o valor `0`.
3. **Funções de controle:**
   - `incrementar`: Aumenta o contador em 1.
   - `decrementar`: Diminui o contador em 1, mas apenas se o valor atual for maior que 0.
4. **Renderização:** Mostra o valor do contador e os dois botões de controle.

---

## **2. Componente Botão Alternador**
### **Descrição:**
O componente `BotaoAlternador` exibe um botão que alterna entre os estados "Ligado" e "Desligado" ao ser clicado. O texto e a cor do botão mudam dinamicamente de acordo com o estado.

### **Código do Componente:**
```jsx
import React, { useState } from 'react';

function BotaoAlternador() {
  const [ligado, setLigado] = useState(true);

  const alternarEstado = () => setLigado((prev) => !prev);

  return (
    <button
      onClick={alternarEstado}
      style={{
        backgroundColor: ligado ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {ligado ? 'Ligado' : 'Desligado'}
    </button>
  );
}

export default BotaoAlternador;
```

### **Explicação:**
1. **Estado do botão:** Criado com `useState(true)`, controla se o botão está "Ligado" (true) ou "Desligado" (false).
2. **Função de alternância:** `alternarEstado` muda o estado atual para o oposto usando `!prev`.
3. **Estilo dinâmico:** A cor de fundo é verde para "Ligado" e vermelha para "Desligado". Outros estilos também são aplicados.
4. **Renderização:** Mostra o texto "Ligado" ou "Desligado", baseado no estado atual.

---

## **3. Componente Lista de Tarefas**
### **Descrição:**
O componente `ListaDeTarefas` é uma aplicação simples para gerenciar uma lista de tarefas. Ele permite adicionar novas tarefas e removê-las ao clicar nelas.

### **Código do Componente:**
```jsx
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
```

### **Explicação:**
1. **Estados gerenciados:**
   - `tarefa`: Armazena o texto digitado no campo de entrada.
   - `lista`: Um array que armazena as tarefas adicionadas.
2. **Funções principais:**
   - `adicionarTarefa`: Adiciona uma nova tarefa à lista, garantindo que o campo não esteja vazio e limpando-o após a adição.
   - `removerTarefa`: Remove a tarefa clicada, identificada pelo índice.
3. **Renderização:**
   - Exibe um campo de entrada e um botão para adicionar tarefas.
   - Mostra a lista de tarefas, onde cada item é clicável para remoção.

