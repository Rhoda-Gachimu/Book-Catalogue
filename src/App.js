import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import book_lover from "../src/images/book_lover.svg"
import styled from "styled-components"
import BookList from "./components/BookList";
import BookCategories from "./components/BookCategories";


function App() {
  
  return (
    <div className="App">
      

    <NavBar/>
    <Routes>
    
         <Route path="/books" element={<BookList />} /> 
         <Route path="/catalogue" element={<BookCategories />} />
    </Routes>
    
    
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
