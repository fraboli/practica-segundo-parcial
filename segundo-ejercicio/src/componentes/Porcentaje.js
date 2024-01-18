import '../style/Porcentaje.css';
import React from 'react';
function Porcentaje({setVal}) {
    const setValuer = (e) => setVal(Number(e.target.value));
    return (
        <form>
        <label for="html">Input Percentage:</label>
        <input type="number" onChange={setValuer} />
        </form>
    )
}

export default Porcentaje;