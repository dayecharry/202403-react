import { useContext, useState } from "react";
import { tasksContext } from "../Context/tasksContext";

function FormTask() {
  const [titleTask, setTitleTask] = useState("");
  const context = useContext(tasksContext);

  const handleInput = (e) => {
    setTitleTask(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTask = {
      title: titleTask,
      isCompleted: false,
      id: context.tasks.length + 1,
    };
    context.addTask(newTask);
  };
  return (
    <form action="">
      <label htmlFor="task">Nombre Tarea</label>
      <input type="text" id="task" onChange={handleInput} />
      <button onClick={handleClick}>Añadir tarea</button>
    </form>
  );
}
export default FormTask;

/*
1- x Crear una variable de estado para guardar el nombre de la tarea
2- x Evento  onChange, sobre el input para cambiar la variable de estado
3- x Evento onClick sobre el boton para añadir la nueva tarea al array
4- Importar el Contexto de la tarea, y usarlo con useContext
5- Crear la funcion manejadora del click, y en ella debo ejecutar addTask() del contexto
*/
