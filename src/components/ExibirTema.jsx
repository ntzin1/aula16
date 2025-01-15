import React from 'react';
import { useTema } from '../context/TemaContext';

function ExibirTema() {
  const { tema } = useTema();

  return <h1>Tema atual: {tema}</h1>;
}

export default ExibirTema;
