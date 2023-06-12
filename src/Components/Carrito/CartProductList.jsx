import "./Cart.css";

export const CartProductList = ({lista,onDeleteItem}) => {

    const removeOrder = () => {
        onDeleteItem();
    }
    return (
        <div className="cart-items">
            {lista.map((prod) => {
                const {name} = prod.item[0];
                return (
                    <div className="flex-list"> 
                        <div className="description">
                            <h2>Item: {name}</h2>
                            <h3>Total: {prod.total}</h3>
                            <button 
                            className="removeItem"
                                onClick={()=> {removeOrder(prod.id)}}
                            >
                                X
                            </button>
                        </div>
                    </div>
                )        
            })}
        </div>
    )
} 

