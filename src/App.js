import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './css/style.css'
import NavBar from './Navbar';
import Login from './Login'
import SignUp from "./SignUp";
import Favorite from "./Favorite";
import Footer from './Footer';
import Showmovie from './Showmovie';
import Favicon from './Favicon';
import Listfavorits from './Listfavorits';
import {langContext} from "./context/langContext";
import React, {useState} from "react";
import ChangeLanguage from "./changeLanguage";

function App() {
  const [contextLang, setContextLang ] = useState("العربية")
  return (
    <>
     <div className={contextLang === "English" ? "text-end" : "text-start"}
          dir= {contextLang === "English" ? "rtl" : "ltr"}>
    <langContext.Provider value= {{contextLang, setContextLang}} >
    <Router> 
      <NavBar /> 
     
                 <div id='c'> <ChangeLanguage /> </div>
                  
      <Switch> 
        <Route path="/" component={Favorite} exact/>
        <Route path="/Login" component={Login} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/Showmovie/:id" component={Showmovie} exact />
        <Route path="/Listfavorits" component={Listfavorits} exact />
      </Switch>
    </Router>
    </langContext.Provider>
    </div>



    </>

  );
}

export default App;
