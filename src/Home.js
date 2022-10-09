import React from "react";
import book_lover from "../src/images/book_lover.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home(){
    return(
    <div>
        <H1>“Books are mirrors:<br></br>you only see in them what you already have inside you.” </H1>

         <ImgBody>
              <img src={book_lover} alt="book lover" width="400px" />
         </ImgBody>
           <Link to="./Catalogue">
               <Button>Books Available</Button>
           </Link>
    
    </div>
    )
}


const ImgBody = styled.div`
   
  

        img {
     display: flex;
     margin-left: auto;
     margin-right: auto;
    width: 40%;
     }

`
const Button = styled.button`
         background-color:blue;
         padding: 20px;
         position: absolute;
         cursor: pointer; 
         left: 42%;
         margin: 50px 10px;
         border-radius:4%;
         font-size: larger;
`
const H1 = styled.h1`
         text-align: center;
         color: black;
         font-style: italic;
         font-weight: lighter;
         font-family:Cormorant Upright ;
         font-style: italic;
`

 
export default Home;