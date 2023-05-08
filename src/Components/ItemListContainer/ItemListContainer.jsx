import Item from "../Item/Item";
import "./ItemListContainer.css";

const ItemListContainer = () =>{
    
    const productosPromise = new Promise ((resolve, reject)=> {
        const productos = [
            {id:1,marca:'lenovo',modelo:'strix1080',stock:10,precio:150000},
            {id:2,marca:'lenovo',modelo:'strix1080',stock:12,precio:130000},
            {id:3,marca:'samsung',modelo:'strix1080',stock:9,precio:120000},
            {id:4,marca:'samsung',modelo:'strix1080',stock:5,precio:110000},
            {id:5,marca:'asus',modelo:'strix1080',stock:50,precio:250000},
            {id:6,marca:'motorola',modelo:'g31',stock:30,precio:80000}
        ];

        setTimeout(()=>{
            resolve(productos)
        },2000)
    })

    productosPromise
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    
    return(
        <>
        <Item />
        </>
    )
} 

export default ItemListContainer;