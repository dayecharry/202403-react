function Select({ setHouse }) {
  const handleSelect = (ev) => {
    setHouse(ev.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor=""> Selecciona tu casa</label>
        <select onChange={handleSelect}>
          <option value=""> Seleccione</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff"> Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </form>
    </div>
  );
}

export default Select;
