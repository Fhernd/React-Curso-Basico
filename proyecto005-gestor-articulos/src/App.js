import { useState } from 'react';

import './App.css';


function generarFila(articulo) {
  return (
    <tr key={articulo.codigo}>
      <td>
        {articulo.codigo}
      </td>
      <td>
        {articulo.descripcion}
      </td>
      <td>
        {articulo.precio}
      </td>
    </tr>
  );
}

function App() {
  function eliminarUltimafila() {
    if (articulos.length) {
      const temporal = Array.from(articulos);
      temporal.pop();
      setArticulos(temporal);
    }
  }

  const [articulos, setArticulos] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.52
    },
    {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 21
    },
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.20
    }
  ]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(generarFila)}
        </tbody>
      </table>
      <button onClick={eliminarUltimafila}>Eliminar última fila</button>
    </div>
  );
}

export default App;
