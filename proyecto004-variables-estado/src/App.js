import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);

  function generarEnteroAleatorio() {
    const enteroAleatorio = Math.trunc(Math.random() * 10);
    setNumero(enteroAleatorio);
  }

  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={generarEnteroAleatorio}>Genenerar entero aleatorio</button>    </div>
  );
}

export default App;
