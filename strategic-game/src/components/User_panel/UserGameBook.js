import axios from "axios";
//import { Link, useNavigate } from "react-router-dom";
import React, {  useEffect, useState } from "react";
import UserHome from "../User-header";
//import "./Book.css";

const Book = (props) => {
  
  const { name, author, description, price, image } = props.book;
  
 
 
  
  return (
    
    <div >
 
      
 <section>
 
                    <div class="container mt-5">
                    
                        <div class="row">
                            <div class="col-md-3"> 
                                <div class="card" style={{width:"18em"}} >
                                    <img class="card-img-top" src={image}  alt="Card"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{name}</h5>
                                        <p class="card-text">{description}</p>
                                        <p class="card-text">{author}</p>
                                        <p class="card-text">{price}</p>
                                        <a href="#" class="btn btn-primary"> buy</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                    </div>    
                </section>     
        </div>


              
        
   
  );
};

export default Book;
