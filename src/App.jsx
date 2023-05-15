import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import {NavBar} from "./Components/NavBar/NavBar";
import ItemDetail from './Components/ItemDetail/ItemDetail';
import categoryMock from "./API/category.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar category={categoryMock.category}/>
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
