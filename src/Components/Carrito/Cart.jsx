import { useState, useContext, useEffect } from "react";
import { collection, getFirestore, getDocs, deleteDoc,doc } from "firebase/firestore";
import { CartProductList } from "./CartProductList";

export const Cart = () => {
    const [product, setListProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const getCollection = collection(db, "orders")
        getDocs(getCollection)
            .then(res => setListProduct(res.docs.map(e => ({ id: e.id, ...e.data() }))))
        }, []);

        const deleteOrder = async (id) => {
            const db = getFirestore();
            const getCollection = collection(db, "orders");
            await deleteDoc(doc(getCollection, id));
        }

    return product.length > 0 ? (
        <CartProductList 
        lista={product}
        onDeleteItem={(prod)=> deleteOrder(prod)}  />
        ) : (
        <h1>Carrito vacío.</h1>
    )
};

{/*  (
    <div>
        <ul>
            {
            product?.map((item) => {
                return <li className="cart-item" key={item.id}>
                    <div>
                        <img src="" alt="" />
                    </div>
                </li>
            })
            }
        </ul>
    </div>
) */}