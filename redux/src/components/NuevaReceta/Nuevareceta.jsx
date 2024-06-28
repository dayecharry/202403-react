import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ingredientes from "../Ingredientes/Ingredientes";

function Nuevareceta() {
  const [receta, setReceta] = useState({
    nombre: "",
    instrucciones: "",
    ingredientes: [],
    tiempo: "",
  });
  const dispatch = useDispatch();
  const listaReceta = useSelector((state) => state.recetas);
  const [error, setError] = useState("");

  const addIngredientes = (value) => {
    const cloneIngredientes = [...receta.ingredientes];
    if (!cloneIngredientes.includes(value)) {
      cloneIngredientes.push(value);
    } else {
      const indexIngredient = cloneIngredientes.indexOf(value);
      cloneIngredientes.splice(indexIngredient, 1);
    }
    setReceta({ ...receta, ingredientes: cloneIngredientes });
  };

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    setReceta({ ...receta, [id]: value });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    if (receta.nombre) {
      receta.id = listaReceta.length + 1;
      dispatch({ type: "ADD_RECETA", payload: receta });
      setError("");
    } else {
      setError("debe llenar el nombre");
    }
  };

  return (
    <form action="">
      <label htmlFor="">Nombre</label>
      <input
        type="text"
        id="nombre"
        onChange={handleInput}
        value={receta.nombre}
      />
      <br />
      <label htmlFor="">Instrucciones</label>
      <input
        type="text"
        id="instrucciones"
        onChange={handleInput}
        value={receta.instrucciones}
      />
      <br />
      <label htmlFor="">Tiempo</label>
      <input
        type="text"
        id="tiempo"
        onChange={handleInput}
        value={receta.tiempo}
      />
      <br />

      <Ingredientes addIngredientes={addIngredientes} />
      <button onClick={handleClick}>Añadir receta</button>
      <p>{error}</p>
    </form>
  );
}

export default Nuevareceta;
