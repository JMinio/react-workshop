import { useState, useEffect } from "react";
import mockCatalogo from "../../API/productos.json";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = ({img,marca,modelo,stock,precio}) => {
  
  const [product, setProduct] = useState(null);

  const {itemId} = useParams();

  useEffect(()=>{
    mockCatalogo(itemId)
      .then(res => {
        setProduct(res);
      })
      .cath(error => {
        console.error(error);
      })
  },[itemId])
  
  return (
    <>
      <div>
      <Card style={{ width: '36rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{marca} {modelo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Unidades disponibles: {stock}</ListGroup.Item>
        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="buttonDetail">
        <ItemCount/>
      </Card.Body>
    </Card>
      </div>
    </>
  );
};

export default ItemDetail;