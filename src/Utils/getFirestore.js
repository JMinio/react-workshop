import {getFirestore,
    doc,
    getDoc,
    getDocs, 
    collection} from 'firebase/firestore';

export const getCollection = async (collections) => {
    const db = getFirestore();
         
    const cat_Collection = collection(db, collections);
    const res = await getDocs(cat_Collection)
    return res.docs.map( (doc)=>({id: doc.id, ...doc.data()}))
}

export const getItems = async (collections, documentsId) => {
    const db = getFirestore(); //conexion a la base de datos.
    const categoryRef = doc(db, collections, documentsId);
    const result = await getDoc(categoryRef);
        if(result.exists()){
            const item =  {id: result.id, ...result.data()}
            return item;
        }    
}
