import React, { useState } from 'react';
import './App.css';

function App() {
  const [numerosAleatorios, setNumeros] = useState([0, 0, 0, 0, 0]);

  function generarEnterosAleatorios() {
    const numeros = new Array(5);
    for (let i = 0; i < numeros.length; i++) {
      numeros[i] = Math.trunc(Math.random() * 10);
    }
    setNumeros(numeros);
  }

  return (
    <div>
      <p>Números aleatorios:</p>
      {numerosAleatorios.map(n => (<p>{n}</p>))}
      <button onClick={generarEnterosAleatorios}>Generar números aleatorios</button>
    </div>
  );
}

export default App;
