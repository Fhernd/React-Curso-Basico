import { useEffect, useState } from 'react';

import Casilla from './Casilla';
import './Tablero.css';


function Tablero() {
    const [tablero, setTablero] = useState(
        [
            ['\u265C', '\u265E', '\u265D', '\u265A', '\u265A', '\u265D', '\u265E', '\u265C'],
            ['\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
            ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656']
        ]
    );

    useEffect(() => {
        function drag(event) {
            event.dataTransfer.setData('fila', event.target.attributes.fila.value);
            event.dataTransfer.setData('columna', event.target.attributes.columna.value);
            event.dataTransfer.setData('valor', event.target.attributes.valor.value);
        }

        function permitirDrop(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            const fila = parseInt(event.dataTransfer.getData('fila'));
            const columna = parseInt(event.dataTransfer.getData('columna'));
            const valor = event.dataTransfer.getData('valor');

            let nuevoTablero = [...tablero];

            for (let f = 0; f < 8; ++f) {
                for (let c = 0; c < 8; ++c) {
                    if (parseInt(event.target.attributes.fila.value) === f && parseInt(event.target.attributes.columna.value) === c) {
                        nuevoTablero[f][c] = valor;

                        if (f !== fila || c !== columna) {
                            nuevoTablero[fila][columna] = '';
                        }
                    }
                }
            }

            setTablero(nuevoTablero);
        }

        const casillas = document.querySelectorAll('.casilla');
        for (const c of casillas) {
            c.addEventListener('dragstart', drag);
            c.addEventListener('dragover', permitirDrop);
            c.addEventListener('drop', drop);
        }

        return () => {
            const casillas = document.querySelectorAll('.casilla');

            for (const c of casillas) {
                c.removeEventListener('dragstart', drag);
                c.removeEventListener('dragover', permitirDrop);
                c.removeEventListener('drop', drop);
            }
        }
    }, [tablero]);

    return (
        <div className="tablero">
            {tablero.map((fila, i) => {
                return fila.map((casilla, j) => {
                    return (<Casilla valor={casilla} fila={i} columna={j} key={i + j} pieza={casilla} color={(i + j) % 2 === 0 ? 'blanco' : 'negro'} />);
                })
            })}
        </div>
    );
}

export default Tablero;
