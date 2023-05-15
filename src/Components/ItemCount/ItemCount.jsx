import useCount from "./hook/useCount";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({type, stock}) => {

    const {number, increment, decrement, resetNumber} = useCount(1, 0, stock);

    return(
        <>
        <div className="item-box">
            {
                type=="button" && (
                    <div className="stock-control">
                        <button onClick={increment}>+</button>
                        <b>{number}</b>
                        <button onClick={decrement} >-</button>
                    </div>
                )}
                {
                    type == "select" && (
                        <select>
                            <option>{stock}</option>
                        </select>
                )}
                <div className="more-functions">
                    <Link to={'/cart'}>
                        <button className="addCart">Add to cart</button>
                    </Link>
                </div>
        </div>
        </>
    )
}

export default ItemCount;