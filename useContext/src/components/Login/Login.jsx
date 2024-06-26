import { useContext } from "react";
import { userContext } from "../Context/userContext";

function Login() {
  //uso el contexto  del usuario que hemos creado.
  const context = useContext(userContext);

  const handleClick = (ev) => {
    ev.preventDefault();
    context.changeToken("nuevo_token_123");
  };
  return (
    <form action="">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="text" id="password" />
      <button onClick={handleClick}>Login</button>
    </form>
  );
}
export default Login;
