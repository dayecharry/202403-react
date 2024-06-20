import React, { useEffect, useState } from "react";

function FilterCategory({ setFilterCategory, filterCategory }) {
  const [categories, setCategories] = useState([]);
  // se ejecuta una sola vez cuando carga la pagina
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSelect = (ev) => {
    setFilterCategory(ev.target.value);
  };

  return (
    <div>
      <label htmlFor="">Selecciona tu categoria</label>
      <select name="" id="" onChange={handleSelect} value={filterCategory}>
        <option value="">Seleccione</option>
        {categories.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterCategory;
