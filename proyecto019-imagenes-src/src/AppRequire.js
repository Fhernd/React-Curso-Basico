import { useState } from 'react';
import './App.css';

function App() {
  const banderas = ['argentina.png', 'brasil.png', 'bolivia.png', 'chile.png', 'colombia.png', 'peru.png', 'uruguay.png', 'venezuela.png'];
  const [indice, setIndice] = useState(4);

  function banderaSiguiente() {
    if (indice < banderas.length - 1) {
      setIndice(indice + 1);
    }
  }

  function banderaAnterior() {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  }

  return (
    <div className="App">
      <h1>Banderas de países latinoamericanos</h1>
      <p><img src={require(`./imagenes/${banderas[indice]}`)} alt="Bandera" /></p>
      <p>
        <input type="button" value="<" onClick={banderaAnterior} />
        <input type="button" value=">" onClick={banderaSiguiente} />
      </p>
    </div>
  );
}

export default App;
