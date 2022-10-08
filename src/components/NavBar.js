import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
    <div>
        <nav>
             <ul>
                  <li><NavLink to="/" exact>App</NavLink></li>
                  <li><NavLink to="/Books" exact>BookList</NavLink></li>
                  <li><NavLink to="/Catalogue" exact>BookCategories</NavLink></li>
       
             </ul>
        </nav>
        <h1>“Books are mirrors:<br></br>you only see in them what you already have inside you.” </h1>

       

    </div>
    );
}

export default NavBar;