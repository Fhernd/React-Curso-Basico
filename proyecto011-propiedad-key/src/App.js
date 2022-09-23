import { useState } from 'react';
import './App.css';

function App() {
  function borrar(codigo) {
    const temporal = articulos.filter(e => e.codigo !== codigo);
    setArticulos(temporal);
  }

  const [articulos, setArticulos] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.52
    }, {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 21
    }, {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.20
    }
  ]);

  return(
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>¿Borrar?</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(e => {
            return(
              <tr key={e.codigo}>
                <td>{e.codigo}</td>
                <td>{e.descripcion}</td>
                <td>{e.precio}</td>
                <td>
                  <button onClick={() => borrar(e.codigo)}>Borrar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
