import { useEffect, useState } from "react";
import Listproduct from "./ListProduct/Listproduct";
import Filters from "./Filters/Filters";
import FilterCategory from "./FilterCategory/FilterCategory";
import Product from "./Product/Product";
import InputCheckbox from "./InputCheckbox/InputCheckbox";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [newProduct, setNewProduct] = useState({
    category: "",
    title: "",
    price: "",
    image: "",
  });
  const [listaCategoria, setListaCategoria] = useState([]);

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
      .filter((product) => {
        if (filterCategory) {
          // !== 0, "",  null, undefined
          return product.category === filterCategory;
        } else {
          return true; // garantizo que devuelva todos los productos
        }
      });

    return filteredProducts;
  };

  const changeNewProducto = (property, value) => {
    setNewProduct({ ...newProduct, [property]: value }); // spread operator para copiar el objeto y luego modificar una propiedad en especifica
  };

  const addNewPoduct = () => {
    setListProduct([newProduct, ...listProduct]);
  };

  const changeListaCategoria = (value) => {
    if (listaCategoria.includes(value)) {
      const extraerArrar = listaCategoria.filter((cat) => cat !== value);
      setListaCategoria(extraerArrar);
    } else {
      setListaCategoria([...listaCategoria, value]);
    }
  };

  return (
    <>
      <h1>Tienda online</h1>
      <InputCheckbox
        changeListaCategoria={changeListaCategoria}
        listaCategoria={listaCategoria}
      />
      <Product
        changeNewProducto={changeNewProducto}
        addNewPoduct={addNewPoduct}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      />
      <Filters setSearch={setSearch} search={search} />
      <FilterCategory
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <Listproduct listProduct={getDataFiltered()} />
    </>
  );
}

export default App;
