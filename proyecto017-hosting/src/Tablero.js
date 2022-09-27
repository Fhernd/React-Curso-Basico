import { useEffect, useState } from 'react';

import Casilla from './Casilla';
import './Tablero.css';


function Tablero() {
    const [tablero, setTablero] = useState(
        [
            ['\u265C', '\u265E', '\u265D','\u265A', '\u265A', '\u265D', '\u265E', '\u265C'],
            ['\u265F', '\u265F', '\u265F','\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['', '', '','', '', '', '', ''],
            ['\u2659', '\u2659', '\u2659','\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
            ['\u2656', '\u2658', '\u2657','\u2655', '\u2654', '\u2657', '\u2658', '\u2656']
        ]
    );

    useState( () => {
        function drag(event) {
            event.dataTransfer.setData('fila', event.target.attributes.fila.value);
            event.dataTransfer.setData('columna', event.target.attributes.columna.value);
            event.dataTransfer.setData('valor', event.target.attributes.valor.value);
        }
    });

    return (
        <div>
            Tablero
        </div>
    );
}

export default Tablero;
