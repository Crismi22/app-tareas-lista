import React, { useState } from 'react';
import FormularioTareas from './FormularioTareas';
import Tareas from './Tareas';
import '../estilos/ListaDeTareas.css';

const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      // // tarea.texto = tarea.texto.target.reset();
      // quiero limpiar el input al agregar tarea 
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  

  return (
    <>
      <FormularioTareas onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
            <Tareas
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea} />
            )
          }
      </div>
    </>
  );
}

export default ListaDeTareas;
