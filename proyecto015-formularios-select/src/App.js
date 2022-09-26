import { useState } from 'react';
import './App.css';

function App() {
  const [dia, setDia] = useState('Lunes');

  function cambiarDia(event) {
    setDia(event.target.value);
  }

  return (
    <div className="App">
      <p>
        <select value={dia} onChange={cambiarDia}>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </p>
      <p>
        Día seleccionado: {dia}
      </p>
    </div>
  );
}

export default App;
