import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch('https://scratchya.com.ar/react/datos.php')
    .then((response) => {return response.json()})
    .then((articulos) => {setArticulos(articulos)})
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(e => {
            return (
              <tr key={e.codigo}>
                <td>{e.codigo}</td>
                <td>{e.descripcion}</td>
                <td>{e.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
