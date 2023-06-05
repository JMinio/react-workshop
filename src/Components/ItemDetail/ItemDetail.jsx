import {useLocation} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../Utils/createUpdateFirestore";
import Swal from "sweetalert2";

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

  const addOrder = (count) => {
    const item = {
      name:modelo,
      total:count,
    }; 
    createOrder(item).then((result)=> {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Orden N°${result} creada!`,
        showConfirmButton: false,
        timer: 1500
      })
    })
  } 

  return (
    <>
      <div className="carDetail">
        <div className="photo">
          <img src={img} alt="product"/>
        </div>
        <div className="body">
          <h1>{marca} {modelo}</h1>
          <ul>
            <li>Unidades disponibles: <b>{stock}</b></li>
            <li>Precio: <b>${precio}</b> </li>
            <ItemCount  
            onChangeCount={(x)=> handCount(x)} 
            onRemoveCount={(x)=> removeCount(x)} 
            onClickAddCart={(x)=> addOrder(x)}
            stock={stock}/>
            {/* <div className="updCompra">
              <button>Actualizar compra</button>
            </div> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;