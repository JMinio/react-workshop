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

    useEffect(()=>{  //renderizado de la lista de productos
        getProductList.then((resolve)=>{

            const producto = resolve.productos;

            if(categoryId){ //filtro para mostrar productos por categoria
                const productosFiltrados = producto.filter(
                    (prod) => prod.category == categoryId || categoryId == 0);
                setProduct(productosFiltrados);
            }
            setProduct(producto);
            return;
        })
    }, [categoryId]) //colocamos el parametro para que cada que se actualice, se rendericen los productos

    return product.length > 0 ? ( //rendering conditional
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner className="spinner" animation="grow"/>
    );
} 

export default ItemListContainer;