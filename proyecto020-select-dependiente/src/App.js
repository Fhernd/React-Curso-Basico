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
    const articulosRubro = articulos.filter(e => e.codigoRubro === rubro.codigo);
    setArticulosRubro(articulosRubro);
    setArticulo(articulosRubro[0]);
  }

  function cambiarArticulo(event) {
    setArticulo(articulosRubro.find(e => e.codigo === parseInt(event.target.value)));
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
