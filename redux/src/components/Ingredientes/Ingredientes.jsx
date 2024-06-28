import React from "react";

function Ingredientes({ addIngredientes }) {
  const handleChange = (ev) => {
    addIngredientes(ev.target.value);
  };
  return (
    <div>
      <input
        type="checkbox"
        name="ingredientes"
        id="ing1"
        value="cebolla"
        onChange={handleChange}
      />
      cebolla
      <input
        type="checkbox"
        name="ingredientes"
        id="ing2"
        value="queso"
        onChange={handleChange}
      />
      queso
      <input
        type="checkbox"
        name="ingredientes"
        id="ing3"
        value="huevos"
        onChange={handleChange}
      />
      huevos
    </div>
  );
}

export default Ingredientes;
