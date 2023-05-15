import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import mockCatalogo from "../../API/productos.json";
import {Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{

    const {categoryId} = useParams(); //buscamos este parametro de la url

    const [product, setProduct] = useState([]);

    const getProductList = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(mockCatalogo);
        }, 500)
    });

    useEffect(()=>{
        getProductList.then((resolve)=>{
            const producto = resolve.productos;

            if(categoryId!=0){
                const productosFiltrados = producto.filter((prod) => prod.category == categoryId)
                setProduct(productosFiltrados);
            } else {
                setProduct(producto);
            }

        })
    }, [categoryId]) //colocamos el parametro para que cada que se actualice, se rendericen los productos

    return product.length > 0 ? (
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner animation="grow"/>
    );
} 

export default ItemListContainer;