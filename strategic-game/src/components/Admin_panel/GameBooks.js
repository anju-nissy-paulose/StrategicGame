import React ,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHome from "../Partials/Admin-header";
//import Book from "./GameBook";
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
    const history = useNavigate();
    
    const deleteHandler = async (id) => {
      await axios
        .delete(`http://localhost:5000/gamebooks/${id}`)
        .then((res) => res.data)
         .then(() => history("/"))
        .then(() => history("/GameBooks"));
    };
   

    return (
      <div> 
        <AdminHome /> 
 
          <div className="container  ml-5 mt-5">
            <div className="row"> 
            <a href="/addGameBook" className="btn btn-success">Add Product </a>
            </div>
          </div>
         <div className="cotainer ml-8 mt-5" >
          
        <table class="table ml-8 ">
      <thead class="thead-dark"style={{paddingLeft:"15em"}}>
             <tr >
              <th scope="col" >Name</th>
              <th scope="col" >Author</th>
             <th scope="col" >description</th>
            <th scope="col" >Price</th>
             <th scope="col" >Image</th>
            
             <th scope="col" >Modify Customer</th> 
           </tr> 
          </thead>
        
      <tbody>
     
         {books &&
            books.map((book, i) => (
         

           <tr scope="row"  key={i}>
          <td >{book.name}</td>
        <td>{book.author}</td>
        <td >{book.description}</td>
        <td >${book.price} </td>
        
        <td><img src={book.image} width={80} height={80} alt={book.name} /></td>
      
        {/* <td className="btn btn-primary mt-4" LinkComponent={Link} to={`/gameBooks/${book._id}`}> View</td> &nbsp;&nbsp;&nbsp; */}
       

        <td className="btn btn-primary mt-4" > 
                     < Link style={{color:'white'}} LinkComponent={Link} to={`/gameBooks/:${book._id}`}>Edit </Link> </td> &nbsp;&nbsp;&nbsp;
       
        <td className="btn btn-success  mt-4" onClick={() => deleteHandler(book._id)}>Delete</td>
        </tr>
            ))}
      </tbody> 
       </table>
     
    
        
      </div>
      </div>
    );
            }

    
export default Books;