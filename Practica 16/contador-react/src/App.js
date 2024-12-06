// Importando las librerias necesarias
import React, {useState} from "react"; // Biblioteca principall, useState para manejar el estado
import './App.css'; // Archivo de estilos CSS

// Componente principal de la app
function App(){
  //Hook useState: inicilizando el contador en 0
  const [contador, setContador] = useState(0);


// Funcion para incrementar el contador
const incrementar = () => {
  setContador(contador + 1); //Actualizamos el estado sumando +1
};

//Funcion para decrementar el contador
const decrementar = () => {
  setContador(contador - 1) //Actualizamos el estado restando -1
}

//Renderizando la interfaz del contador
return(
  <div className="App">
    {/*Titulo del contador */}
    <h1>Contador en React</h1>

    {/*Mostrando el valor del contador*/}
    <h2>{contador}</h2>

    {/*Botón para incrementar*/}
    <button onClick={incrementar} className="boton">
      +
    </button>

    {/*Botón para decrementar*/}
    <button onClick={decrementar} className="boton">
      -
    </button>
  </div>

);
}
// Exportamos el componente a otros archivos
export default App;