
import { createContext, useReducer } from "react";
import { reducer } from "../Reducers/reducers"

const initialState = {
    category: "all",
    price: 0,
    address: {
        city: "",
        cp: ""
    }
};

// se crea el contexto
export const FilterContext = createContext();


// defino el estado y los disparadores para la variable de estado
export const useFilterContext = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch }
}