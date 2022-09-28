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
