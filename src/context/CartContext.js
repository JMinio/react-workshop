import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

export const CartContext = createContext(null);

/* const addToCart = []; */
const estadoGlobal = {addToCart: 0};

export const CartContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(cartReducer, estadoGlobal);

    const addItem = (addToCart) =>{
        console.log('cartcontext', addToCart)
        dispatch({
            type:"AGREGAR",
            payload:{addToCart}
        })
    }
    const remove = (addToCart) =>{
        dispatch({
            type:"RESTAR",
            payload:{addToCart}
        })
    }

    return (
        <CartContext.Provider value={{addToCart: state.addToCart,addItem,remove}}>
            {children}
        </CartContext.Provider>
    )
}