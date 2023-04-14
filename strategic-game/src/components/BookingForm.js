import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import validator from 'validator';
import UserHome from "./User-header";
import logo from '../images/logo.png';
const BookingForm = () => {
  
 

  const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
     
    });
    const [checked] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      
      };
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/api/booking", {
          name: String(inputs.name),
          email: String(inputs.email),
          phone: String(inputs.phone),
          date: Number(inputs.date),
          time: String(inputs.time),
          
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() =>
      alert("Booking successful"))
      .then(()=> history("/Tutorialpage"));
    };

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
    <div >
          <UserHome userData={userData} />
          
            <div className="container mt-5">
            <h2 className="container mt-5" style={{color:"Blue"}}>Booking </h2>
         <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" value={inputs.name} onChange={handleChange}  name="name"/>
           
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" value={inputs.email} onChange={handleChange}  name="email"/>
           
        </div>
        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" class="form-control" value={inputs.date} onChange={handleChange} name="date"/>
           
        </div>
        <div class="form-group">
            <label for="time">Time</label>
            <input type="number" class="form-control" value={inputs.time}  onChange={handleChange}  name="time"/>
           
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="string" class="form-control"  value={inputs.phone}   onChange={handleChange} name="phone"/>
           
        </div>
        <button type="submit" class="btn btn-primary">Add Book</button>
</form>
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
  
  };

export default BookingForm;