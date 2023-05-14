import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

export const NavBar = ({category}) => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p className="navbar__title-content">EnjoyThePCWORLD</p>
      </Link>
       <div className="navbar__category">
      {/* {category.map((cat) => 
        {
          return <Link to={`/category/${cat.id}`}>{cat.tipo}</Link>;
        })} */}
      <Link className="navbar-item" to={"/"}>Home</Link>
      <Link className="navbar-item" to={"/category/1"}>Notebooks</Link>
      <Link className="navbar-item" to={"/category/2"}>Gabinetes</Link>
      <Link className="navbar-item" to={"/category/3"}>Auriculares</Link>
      <Link className="navbar-item" to={"/category/4"}>Coolers</Link>
      <Link className="navbar-item" to={"/category/5"}>Monitores</Link>
      </div>
      <CartWidget />
    </div>
  );
};
