import { useState } from 'react';
import { rubros } from './datos';
import { articulos } from './datos';

import './App.css';

function App() {
  const [rubro, setRubro] = useState(rubros[0]);
  const [articulosRubro, setArticulosRubro] = useState(articulos.filter(e => e.codigoRubro === rubro.codigo));
  const [articulo, setArticulo] = useState(articulosRubro[0]);

  function cambiarRubro(event) {
    setRubro(rubros.find(e => e.codigo === Number.parseInt(event.target.value)));
    const articulosRubro = articulos.filter(e => e.codigoRubro === parseInt(event.target.value));
    setArticulosRubro(articulosRubro);
    setArticulo(articulosRubro[0]);
  }

  function cambiarArticulo(event) {
    setArticulo(articulosRubro.find(e => e.codigo === parseInt(event.target.value)));
  }

  return (
    <div className="formulario">
      <div>
        <select value={rubro.codigo} onChange={cambiarRubro}>
          {rubros.map(e => (
            <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={articulo.codigo} onChange={cambiarArticulo}>
            {articulosRubro.map(e => (
              <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
            ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro: <strong>{rubro.nombre}</strong></li>
          <li>Artículo: <strong>{articulo.nombre}</strong></li>
          <li>Precio: <strong>${articulo.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
