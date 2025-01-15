import React from 'react';
import { useTema } from '../context/TemaContext';

function AlternarTema() {
  const { alternarTema } = useTema();

  return <button onClick={alternarTema}>Alternar Tema</button>;
}

export default AlternarTema;
