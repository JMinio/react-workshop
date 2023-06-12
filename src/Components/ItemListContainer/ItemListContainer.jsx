import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
/* import mockCatalogo from "../../API/productos.json";
 */import {Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCollection} from "../../Utils/getFirestore";
import { getFirestore, collection, getDocs, query, where } from "@firebase/firestore";

const ItemListContainer = () =>{

    const {categoryId} = useParams(); //buscamos este parametro de la url

    const [product, setProduct] = useState([]);

    useEffect(()=> {
        const db = getFirestore();
        const getCollection = collection(db,"items");

        if(categoryId){
            const productoFiltrado = query(getCollection, where("categoryId", "==", categoryId))
            getDocs(productoFiltrado)
                .then(res=> setProduct(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        }else{
            getDocs(getCollection)
            .then(res => setProduct(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        }
        
    },[categoryId])
    return product.length > 0 ? ( //rendering conditional
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner className="spinner" animation="grow"/>
    );
} 

export default ItemListContainer;