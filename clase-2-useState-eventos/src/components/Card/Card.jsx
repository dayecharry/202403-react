import { useState } from "react";
import "./Card.scss";
function Card({ user }) {
  const [stylecss, setStylecss] = useState("hidden");

  //funcion manejadora del evento, y podrias poner el parametro ev
  const handleClick = () => {
    setStylecss("visibility");
  };

  return (
    <>
      <button onClick={handleClick}> Previsualizar</button>
      <section className={stylecss}>
        <h3>
          {user.name} {user.lastname}
        </h3>
        <h4>{user.email}</h4>
      </section>
    </>
  );
}

export default Card;
