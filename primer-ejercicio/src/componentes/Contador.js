import React from 'react';
import { useState } from 'react';
import '../style/Contador.css';
import Boton from './Boton';

function Contador() {
    const [count, setCount] =useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const id = React.useRef(null)
    const clear = () => window.clearInterval(id.current)
    React.useEffect(() => {
        id.current = window.setInterval(() => {
          setTimeLeft((time) => time - 1)
        }, 1000)
    
        return clear
      }, [])
      React.useEffect(() => {
        if (timeLeft === 0) {
          clear()
        }
      }, [timeLeft])
    return (
        <div className='principal'>
        <h1>{count}</h1>
        <h3>Time left: {timeLeft} seconds</h3>
         {timeLeft === 0 ? null : <Boton setCount={setCount} />}
         </div>
    );
}

export default Contador;