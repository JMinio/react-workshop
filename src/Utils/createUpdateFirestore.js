import {
    getFirestore, 
    addDoc,
    collection
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