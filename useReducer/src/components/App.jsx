import Address from "./Address/Address";
import { useFilterContext, FilterContext } from "./Context/FilterContext";
import Filters from "./Filters/Filters";

function App() {
  const context = useFilterContext();

  return (
    <main>
      {/*  al contexto FilterContext le asignamos el valor del estado que esta en nuestro useFilterContext*/}
      <FilterContext.Provider value={context}>
        <h1>Listado producto</h1>
        <Filters />
        <Address />
      </FilterContext.Provider>
    </main>
  );
}

export default App;
