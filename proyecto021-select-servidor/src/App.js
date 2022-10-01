import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [rubros, setRubros] = useState([]);
  const [rubroSeleccionado, setRubroSeleccionado] = useState({});

  useEffect(() => {
    fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperarrubros.php')
    .then((response) => {
      return response.json()
    }).then((datos) => {
      setRubros(datos);
      setRubroSeleccionado(datos[0])
    })
  }, []);

  const [articulosRubro, setArticulosRubro] = useState([]);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState([]);

  useEffect(() => {
    if (rubroSeleccionado.codigo) {
      fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperararticulos.php?rubro=' + rubroSeleccionado.codigo)
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        setArticulosRubro(datos);
        setArticuloSeleccionado(datos[0]);
      });
    }
  }, [rubroSeleccionado]);

  function cambiarRubro(event) {
    const rubroSeleccionado = rubros.find(e => parseInt(e.codigo) === parseInt(event.target.value));
    setRubroSeleccionado(rubroSeleccionado);
  }

  function cambiarArticulo(event) {
    setArticuloSeleccionado(articulosRubro.find(e => parseInt(e.codigo) === parseInt(event.target.value)));
  }

  return (
    <div className="formulario">
      <div>
        <select value={rubroSeleccionado.codigo} onChange={cambiarRubro}>
          {rubros.map(e => (
            <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={articuloSeleccionado.codigo} onChange={cambiarArticulo}>
            {articulosRubro.map(e => (
              <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
            ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro: <strong>{rubroSeleccionado.nombre}</strong></li>
          <li>Artículo: <strong>{articuloSeleccionado.nombre}</strong></li>
          <li>Precio: <strong>${articuloSeleccionado.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
