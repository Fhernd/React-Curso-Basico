import { useState } from 'react';
import './App.css';


function App() {
  const [numero, setNumero] = useState('');

  function cambiarNumero(event) {
    const entrada = event.target.value;
    let cantidad = 0;

    for (let i = 0; i < entrada.length; i++) {
      if (entrada[i] === '0' || entrada[i] === '1') {
        ++cantidad;
      }
    }

    if (cantidad === entrada.length) {
      setNumero(entrada);
    }
  }

  return (
    <div>
      <p>
        Ingrese un número binario:
        <input type="text" value={numero} onChange={cambiarNumero} />
      </p>
    </div>
  );
}

export default App;
