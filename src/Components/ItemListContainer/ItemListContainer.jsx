import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import mockCatalogo from "../../API/productos.json";
import {Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    const [product, setProduct] = useState([]);   

    const {categoryId} = useParams();

    const getProductsList = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(mockCatalogo);
        }, 1500);
    });

    useEffect(()=>{
        getProductsList
        .then((res)=>{
                const producto = res.productos;

                if(categoryId !== 0){
                    const productoFiltrado = 
                    producto.filter((prod) => prod.category === categoryId);
                    setProduct(productoFiltrado);
                }else{
                    setProduct(producto)
                }
            })
    }, [categoryId]);
    console.log(product);

    //si no hay ningun producto, se carga el spinner, sino, los productos.

    return product.length > 0 ? (
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner animation="grow"/>
    );
} 

export default ItemListContainer;