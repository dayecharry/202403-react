function Card(props) {
    //props --> mascota{
    /*name: "fifi", age: 5, img: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/hogartotal/d/descubre-que-dice-tu-mascota-sobre-tu-personalidad-1.jpg"*/

    return (
        <article>
            {/* comentario */}
            <img src={props.mascota.img} alt="" />
            <h4>{props.mascota.name}</h4>
            <h4>La edad : {props.mascota.age}</h4>
        </article>
    )
}
export default Card