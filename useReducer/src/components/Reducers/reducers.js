export const reducer = (state, action) => {
  switch (action.type) {
    case "changeCategory":
      return { ...state, category: action.payload };

    case "changePrice":
      return { ...state, price: action.payload }

    case "changeCity":
      return { ...state, address: { ...state.address, city: action.payload } }

    case "changeCp":
      return { ...state, address: { ...state.address, cp: action.payload } }

    default:
      break;
  }
  /* if(action.type === "changeCategory"){
     return { ...state, category: action.payload };
   }
 */
};
