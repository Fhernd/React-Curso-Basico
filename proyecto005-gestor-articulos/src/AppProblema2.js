import { useState } from "react";

function App() {
    function borrar(codigo) {
        const temporal = articulos.filter(e => e.codigo !== codigo);
        setArticulos(temporal);
    }

    function generarFila(articulo) {
        return (
            <tr key={articulo.codigo}>
                <td>
                    {articulo.codigo}
                </td>
                <td>
                    {articulo.descripcion}
                </td>
                <td>
                    {articulo.precio}
                </td>
                <td>
                    <button onClick={() => borrar(articulo.codigo)}>Borrar</button>
                </td>
            </tr>
        );
    }

    const [articulos, setArticulos] = useState([
        {
            codigo: 1,
            descripcion: 'papas',
            precio: 12.52
        },
        {
            codigo: 2,
            descripcion: 'naranjas',
            precio: 21
        },
        {
            codigo: 3,
            descripcion: 'peras',
            precio: 18.20
        }
    ]);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map(generarFila)}
                </tbody>
            </table>
        </div>
    );
}

export default App;
