import './App.css';

function mostrarTitulo(titulo) {
  return (
    <h1>
      {titulo}
    </h1>
  );
}

function App() {
  return (
    <div>
      {mostrarTitulo('¡Hola... Mundo!')}
      {mostrarTitulo('¡Adiós... Mundo!')}
    </div>
  );
}

export default App;
