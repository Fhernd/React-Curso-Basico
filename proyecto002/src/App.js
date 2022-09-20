import logo from './logo.svg';
import './App.css';

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const siglo = 21;
  const persona = {
    nombre: 'Juan',
    edad: 34
  }

  return (
    <div>
      <h1>Título Nivel 1</h1>
      <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>LLamada a un método</h3>
      <p>Un valor aleatorio llamando a un método:</p>
      {retornarAleatorio()}
      <h3>Cálculo inmediato de expresiones</h3>
      3 + 5 = {3 + 5}
    </div>
  );
}

export default App;
