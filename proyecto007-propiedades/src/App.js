import './App.css';

import {useState} from 'react';
import ListadoResultados from './ListadoResultados';

function App() {
  const [operaciones, setOperacion] = useState([]);

  function sumar(event) {
    event.preventDefault();

    const valor1 = parseInt(event.target.valor1.value);
    const valor2 = parseInt(event.target.valor2.value);

    const suma = valor1 + valor2;

    const resultado = {
      valor1, valor2, resultado: suma
    }

    setOperacion([resultado, ...operaciones]);

    event.target.valor1.value = '';
    event.target.valor2.value = '';
  }

  return (
    <div>
      <form onSubmit={sumar}>
        <p>
          Ingrese primer valor: <input type="number" name="valor1" />
        </p>
        <p>
          Ingrese segundo valor: <input type="number" name="valor2" />
        </p>
        <input type="submit" value="Sumar" />
      </form>
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;
