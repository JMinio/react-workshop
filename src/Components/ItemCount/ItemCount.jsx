import useCount from "./hook/useCount";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onChangeCount, onRemoveCount}) => {

    const { number, increment, decrement} = useCount(0, 0, stock);
    
    const userChange = () => {
        increment();
        onChangeCount(number);
    }     
    const userRemove = () => {
        decrement();
        onRemoveCount(number);
    }
    return (
        <>
            <div className="item-box">
                    <div className="cantidad">
                        <b>{number}</b>
                    </div>
                    <div className="aumentar-restar">
                        <button 
                            disabled={number==stock?true:false}
                            className="btn aumentar " 
                            onClick={userChange}>
                            +
                        </button>
                        <button 
                            disabled={number==0?true:false}
                            className="btn restar" 
                            onClick={userRemove}>
                            -
                        </button>
                        <Link to={'/cart'}>
                            <button className="addCart">Add to cart</button>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default ItemCount;