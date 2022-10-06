import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import Search from "./components/Search";
import BookCategories from "./components/BookCategories";


function App() {
  return (
    <div className="App">

    <NavBar/>
    <BookList/>
    <AddBookForm/>
    <BookCategories/>
    <Search/>
    
    </div>
  );
}

export default App;
