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
