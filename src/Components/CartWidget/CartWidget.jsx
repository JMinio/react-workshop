import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { addToCart } = useContext(CartContext);
     return(
        <div className="cart-widget">
            <Link to={`/cart`}>
                <i className="fa-solid fa-cart-shopping"> {addToCart} </i>
            </Link>
        </div>
    )
}

export default CartWidget;