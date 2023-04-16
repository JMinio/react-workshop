import './styles.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer msg="Bienvenidos al Himalaya" desc="Welcome to my store."/>
    </div>
  );
}

export default App;
