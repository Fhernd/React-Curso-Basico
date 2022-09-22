import './App.css';

import {useState} from 'react';
import ListadoResultados from './ListadoResultados';
import FormularioNumeros from './FormularioNumeros';

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
      <FormularioNumeros onSumar={sumar} />
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;
