
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">
        Logo
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products            
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact            
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <CartWidget />
          </a>
        </li>
        <li className="nav-item">
          <p>0</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;