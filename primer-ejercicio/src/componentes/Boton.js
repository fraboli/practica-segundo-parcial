import '../style/Boton.css';
import React from 'react';
function Boton({setCount}) {

    return (
        <button className={"boton-click"}
            onClick={() => setCount((c) => c + 1)}>
                +
        </button>
    )
}

export default Boton;