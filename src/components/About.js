import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <H2>About us</H2>
            <P>BoOk LOvEr website makes it easy for readers to get books easily by identifying which ones are available. </P>

            <Link to="../">
               <Button>Back</Button>
           </Link>
           <Link to="../Catalogue">
               <Button>Next</Button>
           </Link>
        </div>
    )
}
 const H2 = styled.h2`
   color:red;
   text-align:center;
   Padding:50px;
   font-size:2rem;

 `
 const P =styled.p`
 text-align:center;
 font-size:1.5rem;
 `
 const Button = styled.button`
         background-color:blue;
         padding: 10px;
         cursor: pointer; 
         margin:250px 400px; 
         border-radius:10%;
         width:100px
         box-shadow: 0px 0px 2px 2px rgb(0,0,0);
 
 
 
 
 `

export default About;