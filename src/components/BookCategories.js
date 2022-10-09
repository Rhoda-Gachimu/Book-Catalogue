import React, { useState } from "react"

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

      <button onClick={handleClick} value="comicbooks">Comic Books</button>
      
      <button onClick={handleClick} value="Action_Adventure" >Action_Adventure</button>
      <button onClick={handleClick} value="Detective_Mystery">Detective_Mystery</button>
      <button onClick={handleClick} value="Classics">Classics</button>
      <button onClick={handleClick} value="Fantasy">Fantasy</button>
      
           {books.map(book=><h3>{book.title}</h3>)}
    
    </div>
  );
}

export default BookCategories;
