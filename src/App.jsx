import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer/>
      <Routes>
         <Route exact path="/" element={<ItemListContainer/>}/>
         <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
         <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
