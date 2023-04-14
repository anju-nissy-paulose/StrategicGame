import React, { useState,useEffect } from "react";
import './Support.css';
import logo from '../../images/logo.png';
import Header from '../Header';
import logo1 from '../images/logo.png';

const ContactForm = () => {

    
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const resetForm = () => {
    this.setState({ name: '' })
  };

  return (
    <div>
      <header>
      
      <Header />
      
    </header>
    
    <div class="container1">
      
      <div class="form">
        <div class="contact-info">
          <h3 class="title1">Let's get in touch</h3>
          <p class="text1">
            We are happy to take your feedback and help you
            out with any queries.
          </p>

          <div class="info">
            <div class="information">
             
              <p>123 Springbrooke Cr, ON L5R 2L5</p>
            </div>
            <div class="information">
              
              <p>strategicgames@gmail.com</p>
            </div>
            <div class="information">
              
              <p>111-222-3333</p>
            </div>
            <div class="information">
              
            <img src={logo} alt="Logo" width={130} height={130} />
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form id = "demo_form" onSubmit={handleSubmit} onReset={resetForm} autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder="Username" required/>

            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder="Email" required/>

            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>

              <small>Format: xxx-xxx-xxxx</small>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder="Message" required></textarea>
 
            </div>
            <button class="btn1" type="submit" onClick={resetForm} >{status}</button>
            <button class="btn1" type="reset" >Reset</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-3">
  
  <div class="row">
    <div class="col p-4 bg-dark text-white">
    <a class="App-logo" href="/" style={{paddingRight:"10em",marginLeft:'10em'}}><img src={logo1} width={200} height={180} /></a> &nbsp;&nbsp;
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

export default ContactForm;

