import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import mockCatalogo from "../../API/productos.json";
import {Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = () =>{

    const [product, setProduct] = useState([]);   
    const {categoryId} = useParams();

    const getProductsList = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(mockCatalogo);
        }, 1500);
    });

    useEffect(()=>{
        getProductsList.then((response)=>{
            
                /* setProduct(res.productos); */
                const producto = response.productos;

                if(categoryId !== 0){
                    const productoFiltrado = producto.filter(
                        (prod) => prod.category === categoryId
                    );
                    setProduct(productoFiltrado);
                }
                else
                {
                    setProduct(producto);
                }
            });

    }, [categoryId]);

    //si no hay ningun producto, se carga el spinner, sino, los productos.

    return product.length > 0 ? (
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner animation="grow"/>
    );
} 

export default ItemListContainer;