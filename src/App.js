import React from "react";
import NavBar from "./components/NavBar";
import book_lover from "../src/images/book_lover.svg"
import styled from "styled-components"

function App() {
  
  return (
    <div className="App">
      

    <NavBar/>
    
    
    <ImgBody>
      <img src={book_lover} alt="book lover" width="400px" />
    </ImgBody>
           
    <button>Books Available</button>
    
             
    
   
    </div>
  );
}

const ImgBody = styled.div`
   
  

  img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  }
  

`





export default App;
