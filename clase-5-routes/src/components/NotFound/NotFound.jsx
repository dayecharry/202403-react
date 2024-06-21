import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div>
      <h2>La pagina que buscas no existe</h2>
      <Link to="/" className="button">
        Volver al home
      </Link>
    </div>
  );
}

export default NotFound;
