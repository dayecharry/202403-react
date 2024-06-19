import { useEffect, useState } from "react";
import Listproduct from "./ListProduct/Listproduct";
import Filters from "./Filters/Filters";
import FilterCategory from "./FilterCategory/FilterCategory";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListProduct(data);
      });
  }, []);
  //[] -- > el codigo se ejecuta una sola vez cuando carga la pag

  // listProduct.filter
  useEffect(() => {
    // for, if, peticiones al servidor, ejecutar una funcion, cambiar var estado
    //peticiones al servidor, traer informacion del LocalStorage
  }, []);
  // [] cantidad de veces a ejecutar el codigo anterior, []--> se ejecuta una sola vez
  // [variable estado, var2, var3] se ejecutará cada vez que estas variables cambien

  const getDataFiltered = () => {
    const filteredProducts = listProduct
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((product) => product.category === filterCategory);
    return filteredProducts;
  };

  return (
    <>
      <h1>Tienda online</h1>
      <Filters setSearch={setSearch} />
      <FilterCategory setFilterCategory={setFilterCategory} />
      <Listproduct listProduct={getDataFiltered()} />
    </>
  );
}

export default App;
