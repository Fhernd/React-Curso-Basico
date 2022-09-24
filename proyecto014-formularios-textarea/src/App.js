import { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');

  function cambiarTexto(event) {
    setTexto(event.target.value);
  }

  return (
    <div className="App">
      <p>
        <textarea value={texto} onChange={cambiarTexto} rows="20" cols="50"></textarea>
      </p>
      <p>
        Cantidad de caracteres ingresados: {texto.length}
      </p>
      <p>
        <textarea value={texto} rows="20" cols="50" readOnly></textarea>
      </p>
    </div>
  );
}

export default App;
