import React from 'react';
import './App.css';

export default function App() {
  const banderasPaises = ['argentina.png', 'bolivia.png', 'brasil.png', 'chile.png', 'colombia.png', 'peru', 'uruguay', 'venezuela'];

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
      
    </div>
  );
}
