import React, { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function Address() {
  const context = useContext(FilterContext);

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    const type = id === "city" ? "changeCity" : "changeCp";
    context.dispatch({ type: type, payload: value });
  };

  return (
    <form action="">
      <label htmlFor="">Indica ciudad</label>
      <input type="text" id="city" onChange={handleInput} />
      <label htmlFor="">Indica codigo postal</label>
      <input type="text" id="cp" onChange={handleInput} />
    </form>
  );
}

export default Address;
