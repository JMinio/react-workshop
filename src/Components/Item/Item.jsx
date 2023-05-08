import useCount from "./hook/useCount";
import "./Item.css"

const Item = () => {

    const {number, increment, decrement, resetNumber} = useCount(1, 0, 10);

    return(
        <>
        <div className="item-box">
            <h2>MESA DE LUZ</h2>
            <img src="https://www.espacity.com/w/wp-content/uploads/03024744000031_3-768x624.jpg" alt="mesa de luz" />
            
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

export default Item;