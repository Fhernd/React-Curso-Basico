import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={calcularSuma}>
        <p>
          Ingrese primer valor: 
          <input type="number" name="valor1" />
        </p>
        <p>
          Ingrese segundo valor: 
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function calcularSuma(event) {
  event.preventDefault();

  const valor1 = parseInt(event.target.valor1.value, 10);
  const valor2 = parseInt(event.target.valor2.value, 10);

  const suma = valor1 + valor2;

  alert('La suma es: ' + suma);
}

export default App;
