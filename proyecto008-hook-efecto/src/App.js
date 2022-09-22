import { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [texto, setTexto] = useState('');

  useEffect(() => {
    document.title = texto;
  }, [texto]);

  function cambiar(e) {
    setTexto(e.target.value);
  }

  return (
    <div>
      <p>
        <input type="text" onChange={cambiar}/>
      </p>
      <p>{texto}</p>
    </div>
  );
}

export default App;
