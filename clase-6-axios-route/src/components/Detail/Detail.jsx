import React from "react";
import { Link, useParams } from "react-router-dom";

function Detail({ listCharacters }) {
  const { idCharacter } = useParams();

  const findCharacter = listCharacters.find(
    (character) => character.id === idCharacter
  );

  return (
    <div>
      {findCharacter ? (
        <>
          <h2>detalle del personaje</h2>
          <h3>{findCharacter.name}</h3>
          <h2> {findCharacter.gender === "female" ? "💃" : "🚶"}</h2>
          <Link to={"/"}>Vover al home</Link>
        </>
      ) : null}
    </div>
  );
}

export default Detail;
