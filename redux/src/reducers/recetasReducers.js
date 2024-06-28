const initialState = [
    {
        nombre: "tequeños", instrucciones: "instrucciones 1",
        ingredientes: ["queso", "harina"], tiempo: "tiempo 1", id: "1"
    },
    {
        nombre: "tortilla", instrucciones: "instrucciones 2",
        ingredientes: ["huevos", "patatas", "cebolla"], tiempo: "tiempo 2", id: "2"
    },
]

const recetaReducer = (state = initialState, action) => {
    //action: {type, payload}
    switch (action.type) {
        case "ADD_RECETA":
            return [...state, action.payload];
        case "REMOVE_RECETA":
            return state.filter((item) => item.id !== action.payload)

        default:
            return state;
    }
}

export default recetaReducer;