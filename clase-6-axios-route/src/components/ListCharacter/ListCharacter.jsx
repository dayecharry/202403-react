import Character from "../Character/Character";

function ListCharacter({ characters }) {
  return (
    <section>
      {characters.map((char) => (
        <Character char={char} />
      ))}
    </section>
  );
}

export default ListCharacter;
