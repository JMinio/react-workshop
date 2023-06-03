import {useLocation} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const {state} = useLocation();
  const {img, marca, modelo, stock, precio} = state;
  const {addItem, remove} = useContext(CartContext);

  const handCount = (count) => {
    addItem(count);
  }
  const removeCount = (count)=> {
        remove(count);
  }

  return (
    <>
      <div className="carDetail">
        <div className="photo">
          <img src={img} alt="product-photo"/>
        </div>
        <div className="body">
          <h1>{marca} {modelo}</h1>
          <ul>
            <li>Unidades disponibles: <b>{stock}</b></li>
            <li>Precio: <b>${precio}</b> </li>
            <ItemCount  onChangeCount={(x)=> handCount(x)} onRemoveCount={(x)=> removeCount(x)} stock={stock}/>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;