import { useEffect, useState } from "react";

function CoordenaFlecha() {
    const [posicion, setPosicion] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener('mousemove', fijarPosicion);
        return() => {
            window.removeEventListener('mousemove', fijarPosicion);
            console.log('Se borró el registro de eventos.');
        };
    });

    function fijarPosicion(event) {
        setPosicion({x: event.clientX, y: event.clientY});
    }

    return (
        <div>
            <p>({posicion.x}, {posicion.y})</p>
        </div>
    );
}

export default CoordenaFlecha;
