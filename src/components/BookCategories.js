import React, { useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

function BookCategories() {
  
   const [books, setBooks] = useState([]);
  

  const fetchBook= (category)=>{
    fetch(`https://frozen-ravine-13390.herokuapp.com/${category}`)
    .then((response)=>response.json())
    .then((books)=>{
      setBooks(books);
    });

  }

  const handleClick = (event)=>{
    fetchBook(event.target.value)
  }
  
  return (
    <div>
      <H2>Our Books</H2>
      
      <Button onClick={handleClick} value="comicbooks">Comic Books</Button>
      
      <Button onClick={handleClick} value="Action_Adventure" >Action_Adventure</Button>
      <Button onClick={handleClick} value="Detective_Mystery">Detective_Mystery</Button>
      <Button onClick={handleClick} value="Classics">Classics</Button>
      <Button onClick={handleClick} value="Fantasy">Fantasy</Button>
      
           {books.map(book=><h3>{book.title}</h3>)}
           <Link to="../">
               <Button>Home</Button>
           </Link>
           <Link to="../AboutUs">
               <Button>Back</Button>
           </Link>
    </div>
  );
}
const Button = styled.button`
         background-color:blue;
         padding:10px;
         margin:120px;
        border-radius:5%;
  ` 
  const H2 = styled.h2`
  color:red;
   text-align:center;
   font-size:2rem;
  `      
export default BookCategories;
