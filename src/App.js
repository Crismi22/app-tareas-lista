/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import logoApp from './imagenes/logoApp.png';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
        src= {logoApp}
        className='logo-app' />
      </div>
      <div className='tareas-lista-principal'>
        <h1 className='text-shadow-drop-bl'>MIS TAREAS</h1>
         <ListaDeTareas />
      </div>
    </div>
  )

}

export default App;
