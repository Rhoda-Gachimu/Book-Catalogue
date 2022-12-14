import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar(){
    return(
    <div>
        <nav>
            <P>BoOk LovEr</P>
             <Ul>
                  <li><NavLink to="/" exact>Home</NavLink></li>
                  <li><NavLink to="/AboutUs" exact>About</NavLink></li>
                  <li><NavLink to="/Catalogue" exact>BookCategories</NavLink></li>
       
             </Ul>
        </nav>
        
       

    </div>
    );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style:none;
  font-size:1.5rem;
  
`
const P = styled.p`
font-weight:600;
font-style:bolder;
font-size:2rem;
color:black;

`

export default NavBar;