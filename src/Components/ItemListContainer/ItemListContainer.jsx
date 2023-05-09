import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import mockCatalogo from "../../API/productos.json";
import {Spinner} from "react-bootstrap";

const ItemListContainer = () =>{

    const [product, setProduct] = useState([]);   

    const getProductsList = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(mockCatalogo);
        }, 1500);
    });

    useEffect(()=>{
        getProductsList
            .then((res)=>{
                setProduct(res.productos);
            })
    }, []);

    //si no hay ningun producto, se carga el spinner, sino, los productos.

    return product.length > 0 ? (
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner animation="grow"/>
    );
} 

export default ItemListContainer;