import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <span>
        <Link to="/"> Home</Link>
      </span>
      <span>
        <Link to="/login"> Login</Link>
      </span>
      <span>
        <Link to="/list"> Listado</Link>
      </span>
    </header>
  );
}

export default Header;
