import useCount from "./hook/useCount";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onChangeCount, onRemoveCount, onClickAddCart, onClickUpdateCart }) => {

    const { number, increment, decrement } = useCount(0, 0, stock);

    const userAdd = () => {
        increment();
        onChangeCount(number);
    }
    const userRemove = () => {
        decrement();
        onRemoveCount(number);
    }
    const addCart = () => {
        onClickAddCart(number);
    }
    const updCart = () => {
        onClickUpdateCart(number)
    }
    return (
        <>
            <div className="item-box">
                <div className="cantidad">
                    <b>{number}</b>
                </div>
                <div className="aumentar-restar">
                    <button
                        disabled={number == stock ? true : false}
                        className="btn aumentar "
                        onClick={userAdd}>
                        +
                    </button>
                    <button
                        disabled={number == 0 ? true : false}
                        className="btn restar"
                        onClick={userRemove}>
                        -
                    </button>
                    {/*                         <Link to={'/cart'}>
 */}                    <button
                        className="addCart"
                        onClick={updCart}>
                        Update
                    </button>
                    <button
                        className="addCart"
                        onClick={addCart}>
                        Add to cart
                    </button>
                    {/*                         </Link>
 */}                    </div>
            </div>
        </>
    )
}

export default ItemCount;