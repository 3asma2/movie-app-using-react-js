import {Link} from "react-router-dom";
import Login from './Login'
import Signup from "./SignUp";
import Favorite from "./Favorite";
//import Favicon from "./Favicon";
import './css/style.css'
import ChangeLanguage from "./changeLanguage";
function NavBar() {
  return (

  	<nav className="navbar navbar-expand-lg bg-dark " color="white" >
  <div className="container-fluid">
    
    <Link className="navbar-brand" id="mmm" to="/"> MOVIE </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  " >
          <Link className="nav-link active " id="mmm" to="/Listfavorits" >List favorits</Link>

        </li>
        <li className="nav-item ">
          <Link className="nav-link" id="mmm" to="/Login">Login</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" id="mmm" to="/Signup">Signup</Link>
        </li>
      
      </ul>
     
      
    </div>
  </div>
</nav>
  
  );
}

export default NavBar;
