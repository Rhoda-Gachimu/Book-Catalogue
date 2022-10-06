import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import Search from "./components/Search";
import BookCategories from "./components/BookCategories";
import book_lover from "../src/images/book_lover.svg"


function App() {
  return (
    <div className="App">

    <NavBar/>
    <BookList/>
    <AddBookForm/>
    <BookCategories/>
    <Search/>
    <img src={book_lover} alt="book lover" width="400px" />

    </div>
  );
}

export default App;
