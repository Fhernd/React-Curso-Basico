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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
