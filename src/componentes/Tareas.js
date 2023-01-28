import React from 'react';
import '../estilos/Tarea.css';
import { BsFillPinAngleFill, BsFillPencilFill} from "react-icons/bs";

const Tareas = ({ id,texto, completada, completarTarea, eliminarTarea, editarTarea}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }> 
    {/* agragar una clase condicional */}
      <div className='iconos-contenedor'>
        <div 
          className='tarea-icono'
          onClick={() => eliminarTarea(id)}>
          <BsFillPinAngleFill className='tarea-icono' />
        </div>
        <div 
          className='tarea-icono-edit'
          onClick={() => editarTarea(id)}>
          <BsFillPencilFill className='tarea-icono-edit' />
        </div>
      </div>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id) }>
        {texto}
      </div>
    </div>
  )
}

export default Tareas;