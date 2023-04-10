import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tutor from '../images/tutor.png'
import time from '../images/time.png'
import Header from '../Header';
import UserHome from "../User-header";
import logo from '../images/logo.png';
const URL = "http://localhost:5000/tutorial";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

function TutorialSubPage() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setTutorials(data.tutorials));
  }, []);
  console.log(tutorials);
  //const myArray = Object.values(tutorials);


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
      
   
            <div class="container mt-5">
            <div class="row ">
            
                 {tutorials && tutorials.map((tutorial,i)=> (
                                
                <div className="card col-md-4   "    style={{width:'18em'}} key={i}>
                     <img src={tutorial.image} alt="Card" class="card-img-top" ></img>
                    <div class="card-body">
                            <h2 class="card-title">{tutorial.name}</h2>
                            
                            <p class="card-text">{tutorial.description}</p>
                            <p ><mark style={{backgroundColor:'yellow'}}>{tutorial.category}*</mark></p>
                            <p class="list-group-item"> <img src={tutor} width={35} height={35} alt='tutor'/>{tutorial.professorName}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> {tutorial.deliverymode} <span style={{paddingLeft:'5em',fontSize:'18px'}} >  
                            <img src={time} width={35} height={35} alt='time'/> {tutorial.time} hours</span></li>
                            <li class="list-group-item" style={{fontSize:'20px'}}><b>CA${tutorial.price}</b> </li>
                            <li class="list-group-item" style={{fontSize:'18px'}}><i>Available on <b>{tutorial.availableDate}</b> </i> </li>
                        </ul>
                        <div class="card-body">
                            <button type="submit" className="btn btn-primary mx-2" style={{fontSize:'18px'}}> Add to Cart</button>
                            <button type="submit" className="btn btn-primary" style={{fontSize:'18px'}}>Book Now</button>
                        </div>
                </div>
            ))}
            </div>
           
        </div>
        <div class="container-fluid mt-3">
  
  <div class="row">
    <div class="col p-4 bg-dark text-white">
    <a class="App-logo" href="/" style={{paddingRight:"10em",marginLeft:'10em'}}><img src={logo} width={200} height={180} /></a> &nbsp;&nbsp;
       <div style={{paddingRight:"10em",marginLeft:'10em'}}>
       <a href='https://www.facebook.com'> <i class="fab fa-facebook-f fa-2x"  style={{color: '#3b5998'}} ></i> </a>
       <a href='https://web.whatsapp.com'><i class="fab fa-whatsapp fa-2x" style={{color: '#25d366',paddingLeft:'.5em'}}></i></a>
       <a href='https://www.instagram.com'> <i class="fab fa-instagram fa-2x" style={{color: '#ac2bac',paddingLeft:'.5em'}}></i></a>
       <a href='https://www.youtube.com'> <i class="fab fa-youtube fa-2x" style={{color: '#ed302f',paddingLeft:'.5em'}}></i></a>
        </div>
        
    </div>
    <div class="col p-3 bg-dark text-white">
      <h4>Mind Games </h4>
      <ul style={{listStyle:'none'}}>
        <li>About Us</li>
        <li> Blog</li>
        <li>Careers</li>
        <li>Brands</li>
        <li>Store Locations</li>
      </ul>
      </div>
    <div class="col p-3 bg-dark text-white">
      <h4>Customer Service </h4>
      <ul style={{listStyle:'none'}}>
        <li>Customer Service</li>
        <li> FAQ</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
       
      </ul>
      </div>
      <div class="col p-3 bg-dark text-white">
      <h4>My Account </h4>
      <ul style={{listStyle:'none'}}>
        <li>My account</li>
        <li> Cart</li>
        <li>Wishlist</li>
        <li>Track your Order</li>
       
      </ul>
      </div>
  </div>
</div>
      

    </div>
  );
}

export default TutorialSubPage;
