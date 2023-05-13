import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = ({category}) => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p className="navbar__title-content">EnjoyThePCWORLD</p>
      </Link>
      <div className="navbar__category">
      {category.map((cat) => 
        {
          return <Link to={`/category/${cat.id}`}>{cat.tipo}</Link>;
        })}
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;    