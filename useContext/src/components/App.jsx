import { useUserContext, userContext } from "./Context/userContext";
import { tasksContext, useTasksContext } from "./Context/tasksContext";
import Login from "./Login/Login";
import ListTask from "./ListTasks/ListTask";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  const contextUser = useUserContext();
  const contextTasks = useTasksContext();

  return (
    <div>
      <Header />
      <userContext.Provider value={contextUser}>
        <tasksContext.Provider value={contextTasks}>
          {/*  empezamos a desencadenar nuestra aplicación */}
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<ListTask />} />
          </Routes>
        </tasksContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
