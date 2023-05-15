import {useLocation} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = () => {
  const {state} = useLocation();
  const {img, marca, modelo, stock, precio} = state;

  return (
    <>
      <div>
      <Card className="cardDetail" style={{ width: '36rem'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{marca} {modelo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Unidades disponibles: {stock}</ListGroup.Item>
        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="buttonDetail">
        <ItemCount type="button" stock={stock}/>
      </Card.Body>
    </Card>
      </div>
    </>
  );
};

export default ItemDetail;