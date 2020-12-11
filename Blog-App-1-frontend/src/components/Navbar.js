import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  //const [loggedIn, setLoggedIn] = useState(true);
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/' className="navbar-brand" >Adwoa's Blog</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to='/SignUp' className="nav-link">SignUp</Link>
      </li>
      <li className="nav-item">
        <Link to='/Login' className="nav-link" >Login</Link>
      </li>
      <li className="nav-item">
        <Link to='/AddPost' className="nav-link" >AddPost</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}
export default Navbar;
