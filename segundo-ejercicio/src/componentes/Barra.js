import React from 'react';
import '../style/Barra.css';
function Barra({Largo}) {
const witdh = Largo;
    return (
        <div className="barra">
           {Largo>=0&&Largo<=100?(
           <div className="container-barra" style={{width: `${witdh}%`}}>
            {Largo}%
           </div>
           ):(
            alert("El valor debe estar entre 0 y 100")
            )}
        </div>
    );
};

export default Barra;
