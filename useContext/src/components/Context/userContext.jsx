import { createContext, useState } from "react";

export const userContext = createContext();

//he creado un hook personalizado, para  modificar y acceder al contexto   del usuario
export const useUserContext = () => {
  // CRUD --> create, read, update, delete

  const [state, setState] = useState({
    token: "",
    email: "",
  });
  // al iniciar sesion un usuario se llenara la propiedad token
  const changeToken = (tokenValue) => {
    setState({ ...state, token: tokenValue });
  };

  return { state, changeToken };
};
