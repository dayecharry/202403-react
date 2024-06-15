import "./App.scss"
import Button from "./Button";
import Card from "./Card";
import Form from "./Form";

function App() {
  const name = "Juanma";
  const lastname = "gonzalez"
  const mascota1 = {
    name: "fifi", age: 5, img: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/hogartotal/d/descubre-que-dice-tu-mascota-sobre-tu-personalidad-1.jpg"
  }
  const mascota2 = {
    name: "vainilla", age: 1, img: "https://s1.elespanol.com/2020/08/26/curiosidades/mascotas/mascotas-perros-mascotas_515959375_158488465_1706x960.jpg"
  }
  //addEventListener, elemento.classList.add, document.querySelector() NO se usa
  return (
    <>
      <section>
        <h1 className="title">Bienvenida {name}</h1>
        <p className="paragraph">La <span className="paragraph_blue">mascota</span> es: {mascota1.name} y tiene {mascota1.age} años</p>
        <Button text="Saludame" />
        <Button text="Registrate" />
        <Card mascota={mascota1} />
        <Card mascota={mascota2} />
        <Form nombre={name} apellido={lastname} />
      </section>
    </>
  )
}

export default App
