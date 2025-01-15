import React, { useRef } from 'react';

function FocoInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo" />
      <button onClick={handleFocus}>Focar no Input</button>
    </div>
  );
}

export default FocoInput;
