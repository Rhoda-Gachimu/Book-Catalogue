import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import Search from "./components/Search";
import BookCategories from "./components/BookCategories";
import book_lover from "../src/images/book_lover.svg"
import styled from "styled-components"

function App() {
  return (
    <div className="App">

    <NavBar/>
    <BookList/>
    <AddBookForm/>
    <BookCategories/>
    <Search/>
    <ImgBody>
      <img src={book_lover} alt="book lover" width="400px" />
    </ImgBody>
    

    </div>
  );
}

const ImgBody = styled.div`
  // background-color: red;
  

  img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  }

`

export default App;
