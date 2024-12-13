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
