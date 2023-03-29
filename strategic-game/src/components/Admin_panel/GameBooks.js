import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Book from "./GameBook";
const URL = "http://localhost:5000/gameBooks";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setBooks(data.books));
    }, []);
    console.log(books);

    return (
      <div>  
        <section>
          <div className="container  ml-5 mt-5">
            <div className="row"> 
            <a href="/addGameBook" className="btn btn-success">Add Product </a>
            </div>
          </div>
         <div className="cotainer ml-8 mt-5" >
         <table class="table ml-8 ">
      <thead class="thead-dark"style={{paddingLeft:"15em"}}>
            <tr >
              <th scope="col" style={{paddingRight:"8em"}}>Name</th>
              <th scope="col" style={{paddingRight:"5em"}}>Author</th>
              <th scope="col" style={{paddingRight:"25em"}}>description</th>
              <th scope="col" style={{paddingRight:"1em"}}>Price</th>
              <th scope="col" style={{paddingRight:"5em"}}>Image</th>
              <th scope="col" style={{paddingRight:"5em"}}>Modify Customer</th> 
            </tr>
          </thead>
          </table>
          <div>
          <ul style={{ listStyle: 'none' ,marginRight:"1em" }}> 
          
         {books &&
            books.map((book, i) => (
            
     
             <li key={i}>
                <Book book={book} />
                </li> 
      
      
            ))}
         </ul>
          </div>
         </div>
        

              
         </section>   
       
        
      </div>
    );
    
    };
    
export default Books;