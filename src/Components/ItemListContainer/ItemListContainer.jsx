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
            const queryFilter = query(getCollection, where("categoryId", "==", categoryId))
            getDocs(queryFilter)
                .then(res=> setProduct(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        }else{
            getDocs(getCollection)
            .then(res => setProduct(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        }
        
    },[categoryId])

    /* 
    const getListItem = () => {
        getCollection('items').then((result) => {        
            setProduct(result);
        });
      };
      useEffect(() => {
        getListItem();
      }, []); */
    
    /* const getProductList = new Promise ((resolve, reject) =>{
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
        });
        //eslint-disable-next-line
    }, [categoryId]) //colocamos el parametro para que cada que se actualice, se rendericen los productos
 */
    return product.length > 0 ? ( //rendering conditional
        <ItemList catalogoProductos = {product}/>
    ) :(
        <Spinner className="spinner" animation="grow"/>
    );
} 

export default ItemListContainer;