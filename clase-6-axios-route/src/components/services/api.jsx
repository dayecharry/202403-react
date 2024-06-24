import axios from "axios";

const APIHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  //Authorization: "Bearer token",
};

export const API = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
  headers: APIHeaders,
});

//las propiedades a usar, deben ser las que ya estan definidas
