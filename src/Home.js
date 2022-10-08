import React from "react";
import book_lover from "../src/images/book_lover.svg";
import styled from "styled-components";

function Home(){
    return(
    <div>
        <h1>“Books are mirrors:<br></br>you only see in them what you already have inside you.” </h1>

         <ImgBody>
              <img src={book_lover} alt="book lover" width="400px" />
         </ImgBody>
           
        <Button>Books Available</Button>
    
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

 
export default Home;