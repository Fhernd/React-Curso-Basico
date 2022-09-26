import './Casilla.css'

function Casilla(propiedades) {
    return (
        <span fila={propiedades.fila} columna={propiedades.columna} draggable="true" className={propiedades.color === 'negro' ? 'casilla-negra casilla' : 'casilla-blanca casilla'} valor={propiedades.pieza}>{unescape(propiedades.pieza)}</span>
    );
}

export default Casilla;
