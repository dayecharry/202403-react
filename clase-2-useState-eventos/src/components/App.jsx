import { useState } from "react";
import Register from "./Register/Register";
import "./App.scss";

function App() {
  const title = "Registro de usuario";
  const message = {
    msg: "Registro con exito",
    error: "Error al registrarte",
  };
  const [isLight, setIsLight] = useState(true);
  return (
    <>
      <section className={isLight ? "light" : "dark"}>
        <h1>Eventos</h1>
        <Register
          title={title}
          texto="hola soy una props"
          textMessage={message}
          setIsLight={setIsLight}
        />
      </section>
    </>
  );
}

export default App;
