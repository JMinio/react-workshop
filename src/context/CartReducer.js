const cartReducer = (state,action) => { //el reducer actualiza el estado global (modificar)
    switch(action.type){
        case "AGREGAR":
            return {addToCart: state.addToCart + 1};
        case "RESTAR":
            return {addToCart:state.addToCart - 1};
        case "LIMPIAR":
            return {addToCart:state.addToCart = 0};
        default:
            return state;
    }
}
export default cartReducer;