import React from 'react';
import ReactDOM from 'react-dom/client';

//Importando componente principal y estilos
import './index.css';
import App from './App';


//Obtenemos elemento raíz de HTML donde se renderizará la app
const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderizndo el compoente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


