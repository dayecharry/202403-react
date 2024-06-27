import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function Filters() {
  // usamos el contexto, filterContext
  const context = useContext(FilterContext);

  const handleSelect = (ev) => {
    context.dispatch({ type: "changeCategory", payload: ev.target.value });
  };

  const handleInput = (ev) => {
    context.dispatch({ type: "changePrice", payload: ev.target.value });
  };
  return (
    <div>
      <select onChange={handleSelect} value={context.state.category}>
        <option value="all">All</option>
        <option value="electronics">Electronicos</option>
        <option value="books">Libros</option>
      </select>
      <label htmlFor="">Indica precio</label>
      <input type="text" onChange={handleInput} value={context.state.price} />
      Precio
      <h2> La ctegoria selecionada es: {context.state.category}</h2>
    </div>
  );
}

export default Filters;
