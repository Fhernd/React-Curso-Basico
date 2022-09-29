import { useState } from 'react';
import './App.css';

import argentina from './imagenes/argentina.png';
import bolivia from './imagenes/bolivia.png';
import brasil from './imagenes/brasil.png';
import chile from './imagenes/chile.png';
import colombia from './imagenes/colombia.png';
import peru from './imagenes/peru.png';
import uruguay from './imagenes/uruguay.png';
import venezuela from './imagenes/venezuela.png';

function App() {
  const banderas = [argentina, brasil, bolivia, chile, colombia, peru, uruguay, venezuela];
  const [numeroBandera, setNumeroBandera] = useState(4);

  function banderaSiguiente() {
    if (numeroBandera < banderas.length - 1) {
      setNumeroBandera(numeroBandera + 1);
    }
  }

  function banderaAnterior() {
    if (numeroBandera > 0) {
      setNumeroBandera(numeroBandera - 1);
    }
  }

  return (
    <div className="App">
      <h1>Banderas de países latinoamericanos</h1>
      <p><img src={banderas[numeroBandera]} alt="Bandera" /></p>
      <p>
        <input type="button" value="<" onClick={banderaAnterior} />
        <input type="button" value=">" onClick={banderaSiguiente} />
      </p>
    </div>
  );
}

export default App;
