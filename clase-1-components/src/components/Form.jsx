//aplicando destructuring de Javascript
import PropTypes from "prop-types"

function Form({ nombre, apellido }) {
    return (
        <div>
            <h2>{nombre.toUpperCase()} {apellido} registra tu nueva mascota</h2>
            <form action="">

                <label htmlFor="name"> Nombre</label>
                <input type="text" name="" id="name" />

                <label htmlFor="name"> Nombre</label>
                <input type="text" name="" id="name" />
            </form>
        </div>
    )
}
Form.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string
}

export default Form