import { useContext } from "react";
import { tasksContext } from "../Context/tasksContext";
import FormTask from "../FormTask/FormTask";

function ListTask() {
  // obtengo del contexto la lista de tareas
  const { tasks } = useContext(tasksContext);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} -- <button>X</button>
          </li>
        ))}
      </ul>
      <FormTask />
    </div>
  );
}

export default ListTask;
