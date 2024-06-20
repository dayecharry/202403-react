# Ejercicio de React

Hacer una peticion a un API, pintar el listado de datos

- Pedir datos de la API useEffect() --> hook permite controlar cuantas veces se va a ejecutar un bloque de instrucciones
  [] --> indica que el bloque se ejecuta una sola vez

- Una vez que ya hemos pintado el listado, ahora es el momomento de hacer filtros y para ello debemos hacer lo siguiente:
- Para pintar un listado un listado de datos eimpre hay que usar .map
- crear el componente con el campo de entrada donde el usuario a hacer el filtro, puede ser input:text, radio, checkbox,select

- una vez has creado el formulario el siguiente paso será guardar el valor seleccionado por el usuario en una variable de estado. esta variable suele estar en el componente princiapl

- cuando tengas los datos que el usuario a proporcionado, el siguiente paso es con el metodo .filter de js , realizar el filtro con las condiciones necearias

- Añadir un nuevo producto a mi listado
  - Crear un componente con el HTML del form (precio, imagen, nombre categoria)
  - Crear un variable de estado con el producto debe ser un objeto {} esta debe ir en APP, con ella voy a modificar la lista inicial de productos
  - La variable de estado del nuevo producto, la cambiamos con eventos en el componente del Form, esto ejecuta cada vez que cambias un input
  - Evento onclick- onsubmit para enviar los datos y modificar la lista de productos con el nuevo producto
