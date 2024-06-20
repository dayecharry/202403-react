function Filters({ setSearch, search }) {
  const handleInput = (ev) => {
    setSearch(ev.target.value); // lifting
  };
  return (
    <form action="">
      <label htmlFor="search">Indica Nombre</label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleInput}
        value={search}
      />
    </form>
  );
}

export default Filters;
