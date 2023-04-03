import React ,{ useEffect, useState } from "react";
import axios from "axios";
import UserHome from "../User-header";
import Book from "./UserGameBook";
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


    //---------------------------------------------------
     // usr login data 

  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/registration/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        
        if (data.data.userType === "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./Login";
        }
      });
  }, []);

    return (
      <div>        
         <UserHome userData={userData} />
          <div class="container mt-5 ">
                    
                    <div class="row ">
                    {books &&
            books.map((book, i) => (
            

                        <div class="col-md-3 mx-4" key={i}> 
                    
                
                <Book book={book} />
                
                </div>
      
      
            ))}
           </div>
         
         </div>
         
          </div>
          
       
        
    );
    
    };
    
export default Books;