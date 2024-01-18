import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Barra from './componentes/Barra';
import Porcentaje from './componentes/Porcentaje';
function App() {
  const [val, setVal] = useState(10);
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <Barra Largo={val}/>
      <Porcentaje setVal={setVal}/>
    </div>
  );
}

export default App;
