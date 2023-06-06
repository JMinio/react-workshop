import {useLocation} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder, updateOrder } from "../../Utils/createUpdateFirestore";
import Swal from "sweetalert2";

const ItemDetail = () => {
  const {state} = useLocation();
  const {img, marca, modelo, stock, precio} = state;
  const {addItem, remove} = useContext(CartContext);

  const handCount = (number) => {
    addItem(number);
  }
  const removeCount = (number)=> {
    remove(number);
  }
  const addOrder = (number) => {
    const item = {
      name: marca,
      price: precio,
      total:number * precio,
    }
    createOrder(item).then((result)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Producto agregado al carrito!`,
        showConfirmButton: false,
        timer: 2000
      })})
  }

  const updateCart = (number) => {
    Swal.fire({
      title: '¿Quieres modificar el pedido?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        updateOrder(number);
        Swal.fire('Listo! Cambio guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se realizo ninguna modificacion!', '', 'info')
      }
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
            onClickUpdateCart={(x)=> updateCart(x)}
            stock={stock}/>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;