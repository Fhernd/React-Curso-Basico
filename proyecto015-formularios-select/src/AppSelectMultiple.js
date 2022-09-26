import { useState } from 'react';
import './App.css';

function App() {
  const [dias, setDias] = useState(['Lunes', 'Miércoles']);

  function cambiarDias(event) {
    const opciones = event.target.options;
    const diasSeleccionados = [];

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].selected) {
            diasSeleccionados.push(opciones[i].value);
        }
    }

    setDias(diasSeleccionados);
  }

  return (
    <div className="App">
      <p>
        <select value={dias} onChange={cambiarDias} multiple>
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
        Días seleccionados: {dias.map(d => {return (<p>{d}</p>)})}
      </p>
    </div>
  );
}

export default App;
