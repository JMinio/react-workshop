import {useState} from 'react';
import "./ItemCount.css"

const ItemCount = (stock) => {

    const [numberCount, setNumberCount] = useState(0);

    const sumarCantidad = () =>{
        setNumberCount(numberCount+1);
    }
    const restarCant = () => {
        setNumberCount(numberCount - 1);
    } 

    const isOff = {
        color:'red'
    }
    const isOn = {
        color:'black'
    }

    return(
        <>
        <div className="item-box">
        <h1>{stock.stock} ITEMS DISPONIBLES</h1> 
            <h2>MESA DE LUZ</h2>
            <img src="https://www.espacity.com/w/wp-content/uploads/03024744000031_3-768x624.jpg" alt="mesa de luz" />
            <div className="stock-control">
                <button
                onClick={() => sumarCantidad()}
                disabled={numberCount===stock.stock?true:false}
                >+</button>
                
                <b>{numberCount}</b>
                
                <button
                onClick={()=>restarCant()}
                style={numberCount===0?isOff:isOn}
                disabled={numberCount===0?true:false}
                >-</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount;