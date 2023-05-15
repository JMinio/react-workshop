import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import "./Item.css";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';


const Item = ({img,marca,modelo,stock,precio}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{marca} {modelo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Unidades disponibles: {stock}</ListGroup.Item>
        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="buttonDetail">
        <Button variant="dark">
          <Link 
          to={"/item/1"}
          state={{img, marca, modelo, stock, precio}}
          >
            Detalle
          </Link>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item;