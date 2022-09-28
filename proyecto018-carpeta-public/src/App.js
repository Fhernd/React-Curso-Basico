import React from 'react';
import './App.css';

export default function App() {
  const banderasPaises = ['argentina.png', 'bolivia.png', 'brasil.png', 'chile.png', 'colombia.png', 'peru.png', 'uruguay.png', 'venezuela.png'];

  const [banderaSeleccionada, setBanderaSeleccionada] = React.useState(4);

  function banderaSiguiente() {
    if (banderaSeleccionada < banderasPaises.length - 1) {
      setBanderaSeleccionada(banderaSeleccionada + 1);
    }
  }

  function banderaAnterior() {
    if (banderaSeleccionada > 0) {
      setBanderaSeleccionada(banderaSeleccionada - 1);
    }
  }

  return (
    <div className="App">
      <h1>Banderas de países latinoamericanos</h1>
      <p><img src={process.env.PUBLIC_URL + '/imagenes/' + banderasPaises[banderaSeleccionada]} alt="bandera"/></p>
      <p>
        <input type="button" value="<" onClick={banderaAnterior} />
        <input type="button" value=">" onClick={banderaSiguiente} />
        {banderasPaises[banderaSeleccionada]}
      </p>
    </div>
  );
}
