import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookCategories from "./components/BookCategories";
import Home from "./Home";
import './index.css';





function App() {
  
  
  
  return (
    <div className="App">
      

    <NavBar/>
    <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/books" element={<BookList />} /> 
         <Route path="/catalogue" element={<BookCategories />} />
    </Routes>
    
    
    
    
             
    
   
    </div>
  );
}







export default App;
