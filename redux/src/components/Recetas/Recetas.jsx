import { useDispatch, useSelector } from "react-redux";

function Recetas() {
  // selecciono de mi store solo la propiedad recetas
  const listaReceta = useSelector((state) => state.recetas);
  const dispatch = useDispatch();

  const handleClick = (ev) => {
    const id = ev.target.id;
    dispatch({ type: "REMOVE_RECETA", payload: id });
  };
  return (
    <div>
      <ul>
        {listaReceta.map((rec) => (
          <li key={rec.id}>
            {rec.nombre}{" "}
            <button id={rec.id} onClick={handleClick}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recetas;
