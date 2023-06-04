import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import {NavBar} from "./Components/NavBar/NavBar";
import ItemDetail from './Components/ItemDetail/ItemDetail';
/* import categoryMock from "./API/category.json"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import {getFirestore, getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';


function App() {
  const [categoria, setCategoria] = useState();

  useEffect(()=>{
    const db = getFirestore();
    const categoriaCollection = collection(db, "categorias");
    getDocs(categoriaCollection).then((snapshots)=>{ 
      setCategoria(
        snapshots.docs.map( (doc)=>({id: doc.id, ...doc.data()}))
        );
    })
  }, []);

  return (
    <BrowserRouter>
      <NavBar category={categoria}/>
      <Routes>
         <Route exact path="/" element={<ItemListContainer/>}/>
         <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
         <Route exact path="/item/:itemId" element={<ItemDetail/>}></Route>
         <Route exact path="*" element={ <h1>404 NOT FOUND</h1> }></Route>
         <Route exact path="/cart" element={<h1> Bienvenido al carrito de compras</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
