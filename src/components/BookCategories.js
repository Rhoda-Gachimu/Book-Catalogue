import React, { useState } from "react"
import styled from "styled-components";

function BookCategories() {
  
   const [books, setBooks] = useState([]);
  

  const fetchBook= (category)=>{
    fetch(`http://localhost:3000/${category}`)
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
      
      <Button onClick={handleClick} value="comicbooks">Comic Books</Button>
      
      <Button onClick={handleClick} value="Action_Adventure" >Action_Adventure</Button>
      <Button onClick={handleClick} value="Detective_Mystery">Detective_Mystery</Button>
      <Button onClick={handleClick} value="Classics">Classics</Button>
      <Button onClick={handleClick} value="Fantasy">Fantasy</Button>
      
           {books.map(book=><h3>{book.title}</h3>)}
    
    </div>
  );
}
const Button = styled.button`
         background-color:blue;
         padding:10px;
         margin:120px;
        
  `       
export default BookCategories;
