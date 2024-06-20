const INITIAL_STATE = {
  category: "",
  title: "",
  price: "",
  image: "",
};

function Product({
  changeNewProducto,
  addNewPoduct,
  newProduct,
  setNewProduct,
}) {
  const { title, price, image, category } = newProduct;

  const handleInput = (ev) => {
    changeNewProducto(ev.target.id, ev.target.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    addNewPoduct();
    setNewProduct(INITIAL_STATE);
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setNewProduct(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleForm} onChange={handleInput}>
      <h4>Añadir nuevo producto</h4>
      <div>
        <label htmlFor="title">Nombre</label>
        <input type="text" name="title" id="title" value={title} />
      </div>
      <div>
        <label htmlFor="price">Precio</label>
        <input type="number" name="price" id="price" value={price} />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <input type="text" name="category" id="category" value={category} />
      </div>
      <div>
        <label htmlFor="image">Imagen</label>
        <input type="text" name="image" id="image" value={image} />
      </div>
      <button>Añadir</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Product;
