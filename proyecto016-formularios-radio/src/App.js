import { useState } from 'react';
import './App.css';

function App() {
  const [estudios, setEstudios] = useState('Primaria');

  function cambiarEstudios(event) {
    setEstudios(event.target.value);
  }

  return (
    <div className="App">
      <p>
        <input type="radio" value="Primaria" checked={estudios === 'Primaria'} onChange={cambiarEstudios} />Primaria
      </p>
      <p>
        <input type="radio" value="Secundaria" checked={estudios === 'Secundaria'} onChange={cambiarEstudios} />Secundaria
      </p>
      <p>
        <input type="radio" value="Universitaria" checked={estudios === 'Universitaria'} onChange={cambiarEstudios} />Universitaria
      </p>
      <p>
        Nivel de estudios: {estudios}
      </p>
    </div>
  );
}

export default App;
