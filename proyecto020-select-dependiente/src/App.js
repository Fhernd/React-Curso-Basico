import { useState } from 'react';
import { rubros } from './datos';
import { articulos } from './datos';

import './App.css';

function App() {
  const [rubro, setRubro] = useState(rubros[0]);
  const [articulosRubro, setArticulosRubro] = useState(articulos.filter(e => e.codigoRubro === rubro.codigo));
  const [articulo, setArticulo] = useState(articulosRubro[0]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
