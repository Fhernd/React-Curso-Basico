import {useState} from 'react';
import './App.css';

function App() {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: 0,
    estudios: false
  });

  function cambiarNombre(event) {
    setDatos(valores => ({
      ...valores,
      nombre: event.target.value
    }));
  }

  function cambiarEdad(event) {
    setDatos(valores => ({
      ...valores,
      edad: event.target.value
    }));
  }

  function cambiarEstudio(event) {
    setDatos(valores => ({
      ...valores,
      estudios: !datos.estudios
    }));
  }

  function procesar(event) {
    event.preventDefault();

    alert(`Dato cargado: Nombre: ${datos.nombre} - Edad: ${datos.edad} - Estudios: ${datos.estudios}`);
  }

  return (
    <div>
      <form onSubmit={procesar}>
        <p>
          Ingrese nombre: <input type="text" value={datos.nombre} onChange={cambiarNombre}/>
        </p>
        <p>
          Ingrese edad: <input type="number" value={datos.edad} onChange={cambiarEdad}/>
        </p>
        <p>
          Estudios: <input type="checkbox" value={datos.estudios} onChange={cambiarEstudio}/>
        </p>
        <p>
          <input type="submit"/>
        </p>
      </form>
      <hr/>
      <h3>Datos ingresados</h3>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p>
      <p>Estudios: {datos.estudios ? 'con estudios' : 'sin estaudios'}</p>
    </div>
  );
}

export default App;
