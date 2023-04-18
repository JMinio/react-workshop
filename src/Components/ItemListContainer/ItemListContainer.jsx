import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (greeting) =>{
    return(
        <>
        <h1 className="title">
            {greeting.msg}
        </h1>
        <ItemCount stock="10" />
        </>
    )
} 

export default ItemListContainer;