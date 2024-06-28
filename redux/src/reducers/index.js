import recetaReducer from "./recetasReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    recetas: recetaReducer,
})
export default rootReducer;