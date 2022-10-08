import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
    <div>
        <nav>
             <ul>
                  <li><NavLink to="/" exact>Home</NavLink></li>
                  <li><NavLink to="/Books" exact>BookList</NavLink></li>
                  <li><NavLink to="/Catalogue" exact>BookCategories</NavLink></li>
       
             </ul>
        </nav>
        
       

    </div>
    );
}

export default NavBar;