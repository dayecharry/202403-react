import { useState } from "react";
import Card from "../Card/Card";

function Register({ title, texto, textMessage, setIsLight }) {
  //console.log(props.title);
  const { msg, error } = textMessage;
  const [user, setUser] = useState({
    email: "",
    name: "",
    lastname: "",
    age: "",
  });
  const handleInput = (e) => {
    const id = e.target.id; // obtengo el id del input que cambió
    const value = e.target.value; // obtengo el valor que escribió el usuario
    setUser({ ...user, [id]: value }); // setUser recibe el nuevo valor de la variable de estado

    //user[id] = value; // user["email"] = valor

    /* if (id === "email") {
      user.email = value;
    } else if (id === "name") {
      user.name = value;
    } else if (id === "age") {
      user.age = value;
    } else if (id === "lastname") {
      user.lastname = value;
    }*/
  };

  const handleMode = (ev) => {
    const id = ev.target.id;
    if (id === "dark") {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  };
  return (
    <div>
      <button id="light" onClick={handleMode}>
        Claro
      </button>
      <button id="dark" onClick={handleMode}>
        Oscuro
      </button>
      <h5>{title}</h5>
      <p>{msg}</p>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="email" onChange={handleInput} />
        <label htmlFor="name">Nombre</label>
        <input type="text" name="" id="name" onChange={handleInput} />
        <label htmlFor="lastname">Apellido</label>
        <input type="text" name="" id="lastname" onChange={handleInput} />
        <label htmlFor="age">Edad</label>
        <input type="text" name="" id="age" onChange={handleInput} />
        <button>Registrar</button>
      </form>
      <Card user={user} />
    </div>
  );
}

export default Register;
