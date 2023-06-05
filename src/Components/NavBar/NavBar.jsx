import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

export const NavBar = ({category}) => {
  return (
    <div className="navbar">
      <Link to={'./'}>
        <p className="navbar__title-content">
        PC BUILD   
        </p>
      </Link>
       <div className="navbar__category">
      <Link className="navbar-item" to={'./'}>
        Inicio
      </Link>
        {
        category?.map((cat) => { //agregamos el ? luego de category, ya que al recibir datos de la DB, tiene latencia.
                                //Entonces, ponemos el condicional para que termine de hacer el llamado y luego complete la info.
              return <Link className="navbar-item" key={cat.id} to={`/category/${cat.id}`}>{cat.categoria}</Link>;
            })}
        </div>
      <CartWidget/>
    </div>
  );
};
