import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import BookCategories from "./components/BookCategories";
import Home from "./Home";
import './index.css';
import About from "./components/About";






function App() {
  
  
  
  return (
    <div className="App">
      

    <NavBar/>
    <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/AboutUs" element={<About />} /> 
         <Route path="/catalogue" element={<BookCategories />} />
    </Routes>
    
    
    
  
             
    
   
    </div>
  );
}







export default App;
