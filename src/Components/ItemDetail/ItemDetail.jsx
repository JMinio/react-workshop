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
      <div>
      <Card className="cardDetail">
        <Card.Img variant="top" src={img} />
        <Card.Body className="body">
            <Card.Title className="cardDetail-title">{marca} {modelo}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Unidades disponibles: {stock}</ListGroup.Item>
              <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
              <ItemCount type="button" stock={stock}/>
            </ListGroup>
        </Card.Body>
    </Card>
      </div>
    </>
  );
};

export default ItemDetail;