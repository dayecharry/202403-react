function InputCheckbox({ changeListaCategoria, listaCategoria }) {
  const handleCheckbox = (ev) => {
    changeListaCategoria(ev.target.value);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="electronica"
        id="electronica"
        value="electronica"
        onChange={handleCheckbox}
        checked={listaCategoria.includes("electronica")}
      />
      electronica
      <input
        type="checkbox"
        name="joyas"
        id="joyas"
        onChange={handleCheckbox}
        value="joyas"
        checked={listaCategoria.includes("joyas")}
      />
      joyas
      <input
        type="checkbox"
        name="ropa"
        id="ropa"
        value="ropa"
        onChange={handleCheckbox}
        checked={listaCategoria.includes("ropa")}
      />
      Ropa
    </div>
  );
}

export default InputCheckbox;
