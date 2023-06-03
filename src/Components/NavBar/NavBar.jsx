import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

export const NavBar = ({category}) => {
  return (
    <div className="navbar">
        <p className="navbar__title-content">EnjoyThePCWORLD</p>
       <div className="navbar__category">

      {category.map((cat) => 
        {
          return <Link className="navbar-item" key={cat.id} to={`/category/${cat.id}`}>{cat.tipo}</Link>;
        })}
        </div>
      <CartWidget/>
    </div>
  );
};
