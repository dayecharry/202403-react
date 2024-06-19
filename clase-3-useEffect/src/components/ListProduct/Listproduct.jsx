import "./listproduct.scss";

function Listproduct({ listProduct }) {
  const dataLi = listProduct.map((product) => (
    <li className="card" key={product.id}>
      <img src={product.image} className="card_image" />
      <h4>{product.title} </h4>
      <h4>precio: {product.price} </h4>
    </li>
  ));

  return <ul>{dataLi}</ul>;
}

export default Listproduct;
