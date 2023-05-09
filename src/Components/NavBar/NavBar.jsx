import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p className="navbar__title-content">EnjoyThePCWORLD</p>
      </Link>
      <div className="navbar__category">
        <Link className="navbar-item" to={"/"}>Home</Link>
        <Link className="navbar-item" to={"/category/1"}>Notebooks</Link>
        <Link className="navbar-item" to={"/category/2"}>Auriculares</Link>
        <Link className="navbar-item" to={"/category/3"}>Monitores</Link>
        <Link className="navbar-item" to={"/category/3"}>Gabinetes</Link>
        <Link className="navbar-item" to={"/category/3"}>Monitores</Link>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;  