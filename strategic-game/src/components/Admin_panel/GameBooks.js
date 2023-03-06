import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Book from "./GameBook";
const URL = "http://localhost:5000/gamebooks";
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
          <div className="container ml-5">
            <div className="row"> 
            <a href="#" className="btn btn-success">Add Product </a>
            </div>
          </div>
         <div className="cotainer ml-5 mt-5"style={{paddingRight:"5em"}} >
         <table class="table">
      <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Modify Customer</th> 
            </tr>
          </thead>
          </table>
          <div>
          <ul style={{ listStyle: 'none' ,paddingRight:"2em" }}> 
          
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