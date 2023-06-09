import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import {NavBar} from "./Components/NavBar/NavBar";
import ItemDetail from './Components/ItemDetail/ItemDetail';
/* import categoryMock from "./API/category.json"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getCollection} from './Utils/getFirestore';
import { Cart } from './Components/Carrito/Cart';

function App() {
  const [categoria, setCategoria] = useState();

  useEffect(()=>{
    getCollection('categorias').then((res) => {    //getCollection hace el llamado a firebase para el navbar
      setCategoria(res)
    });
  }, []);
  
  return (
    <BrowserRouter>
      <NavBar category={categoria}/>
      <Routes>
         <Route exact path="/" element={<ItemListContainer/>}/>
         <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
         <Route exact path="/item/:itemId" element={<ItemDetail/>}></Route>
         <Route exact path="*" element={ <h1>404 NOT FOUND</h1> }></Route>
         <Route exact path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
