import {useLocation} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = () => {
  const {state} = useLocation();
  const {img, marca, modelo, stock, precio} = state;

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
            <ItemCount stock={stock}/>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;