import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

export const CartContext = createContext(null);

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

    const getQuantity = () => {
        let cant = 0;
        state.forEach((e) => cant =+ e.estadoGlobal) 
            return cant
    };
    
    const remove = (addToCart) =>{
        dispatch({
            type:"RESTAR",
            payload:{addToCart}
        })
    }
    const clear = (addToCart) =>{
        dispatch({
            type:"LIMPIAR",
            payload:{addToCart}
        })
    }

    return (
        <CartContext.Provider value={{addToCart: state.addToCart,addItem,remove,clear,getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}