import { Route, Routes } from "react-router-dom";
import Select from "./Select/Select";
import { useEffect, useState } from "react";
import { API } from "./services/api";
import ListCharacter from "./ListCharacter/ListCharacter";
import Detail from "./Detail/Detail";

function App() {
  const [house, setHouse] = useState("gryffindor");
  const [listCharacters, setListCharacters] = useState([]);

  //pedir los datos al servidor
  useEffect(() => {
    // axios(`https://hp-api.onrender.com/api/characters/house/${house}`)

    API.get(`/characters/house/${house}`).then(
      (response) => {
        console.log(response);
        setListCharacters(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [house]);

  //crear un componente para pintar la lista
  return (
    <>
      <h1>Listado personajes de Harry Potter</h1>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Select setHouse={setHouse} />
              <ListCharacter characters={listCharacters} />
            </main>
          }
        />
        <Route
          path="/detail/:idCharacter"
          element={<Detail listCharacters={listCharacters} />}
        />
      </Routes>
    </>
  );
}

export default App;
