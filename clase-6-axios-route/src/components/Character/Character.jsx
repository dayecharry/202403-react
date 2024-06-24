import { Link } from "react-router-dom";
import "./character.scss";
function Character({ char }) {
  const img = char.image
    ? char.image
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQR8-20v9bcVOLzJOqtivzfeIf8oyFdPQs8byFV-dO4v285zI7Oudp-Pmp_-qD4G5-g8o&usqp=CAU";
  return (
    <article className="card">
      <Link to={`/detail/${char.id}`}>
        <img src={img} alt="" />
        <h4>{char.name}</h4>
      </Link>
    </article>
  );
}

export default Character;
