function ListadoResultados(propiedades) {
    return (
        <ul>
            {propiedades.resultados.map(e => <li>La suma de {e.valor1} y {e.valor2} es {e.resultado}</li>)}
        </ul>
    );
}

export default ListadoResultados;
