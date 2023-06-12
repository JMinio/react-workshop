import {
    getFirestore, 
    addDoc,
    doc,
    collection,
    updateDoc
} from 'firebase/firestore';

export const createOrder = async (items) => {
     const order = {
        buyer: {
            name: 'Julian',
            phone: 1136167234,
            email:'ax@ax.com'
        },
        item: [{
            name:items.name,
            price:items.price
        }],

        total: items.total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders'); 
    
    addDoc(orderCollection, order).then(({id})=> {
        return id;
    })
};

export const updateOrder = async (id) => {
    const db = getFirestore(); //conexion a la db
    const orderDoc = doc(db, "orders", "MF7N7rj8PbrzGgGSvrp6") //buscamos en la db, en la coleccion "orders", el documento...
    updateDoc(orderDoc, {total: 15500}).then((result) => {
        console.log(result)
    }) //modificamos el item...    
}
