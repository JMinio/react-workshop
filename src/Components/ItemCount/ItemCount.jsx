import useCount from "./hook/useCount";
import "./ItemCount.css";
import { Link } from "react-router-dom";
import 'animate.css';

const ItemCount = ({stock }) => {

    const { number, increment, decrement} = useCount(1, 0, stock);

    return (
        <>
            <div className="item-box">
                    <div className="cantidad">
                        <b>{number}</b>
                    </div>
                    <div className="aumentar-restar">
                        <button className="btn aumentar animate_animated animate__pulse animate__delay-2s" onClick={increment}>+</button>
                        <button className="btn restar animate_animated animate__pulse animate__delay-2s" onClick={decrement} >-</button>
                        <Link to={'/cart'}>
                            <button className="addCart">Add to cart</button>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default ItemCount;