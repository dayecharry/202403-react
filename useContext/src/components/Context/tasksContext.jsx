import { createContext, useState } from "react";

export const tasksContext = createContext();

export const useTasksContext = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Ir a la compra", isCompleted: false },
    { id: 2, title: "Hacer examen DGT", isCompleted: false },
  ]);

  /* 
  si los datos vienen de una API,  hago la peticion cuando carga la pagina
    useEffect(()=>{
        setTasks()
        },[])
  */

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = () => {};

  return { tasks, addTask, deleteTask };
};
