import React, {  useEffect, useState } from "react";
import axios from "axios";
//import UserHeader from "../User-header";
import UserBook from "./UserGameBook";
const URL = "http://localhost:5000/gameBooks";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

const UserGameBooks = () =>{
  
   const URL = "http://localhost:5000/gameBooks";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
    
  const [userbooks, setUserBooks] = useState();
  
  useEffect(() => {
    fetchHandler().then((data) => setUserBooks(data.userbooks));
  }, []);
  console.log(userbooks);

    
    
     return (
        <div>                    
           <ul style={{ listStyle: 'none' ,marginRight:"1em" }}> 
          
          {userbooks&&
             userbooks.map((userbook, i) => (
             
      
              <li key={i}>
                 <UserBook userbook={userbook} />
                 </li> 
       
       
             ))}
          </ul>
                            
                    
                    
                
              
        </div>
     )
};
export default UserGameBooks;