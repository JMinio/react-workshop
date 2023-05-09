import useCount from "./hook/useCount";
import "./ItemCount.css"

const ItemCount = () => {

    const {number, increment, decrement, resetNumber} = useCount(1, 0, 10);

    return(
        <>
        <div className="item-box">            
            <div className="stock-control">
                <button onClick={increment}>+</button>
                <b>{number}</b>
                <button onClick={decrement} >-</button>
            </div>
            <div className="more-functions">
                <button className="reset" onClick={resetNumber} >Reset</button>
                <button className="addCart">
                    Add to cart
                </button>
            </div>
        </div>
        </>
    )
}

export default ItemCount;