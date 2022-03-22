
import Formulario from './Components/Formulario';
import MostrarCuadros from './Components/MostrarCuadros';
import React,{useState} from 'react';

function App() {
  const [colores,setColores] = useState([]);

  const agregarColor = (color) => {
    setColores([color,...colores])
  }

  return (
    <>
      <Formulario agregarColor={agregarColor}/>
      <MostrarCuadros colores={colores}/>
    </>
  );
}

export default App;
