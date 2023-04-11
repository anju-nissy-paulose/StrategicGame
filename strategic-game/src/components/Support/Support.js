import React, { useState } from "react";
import './Support.css';
import logo from '../../images/logo.png';

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
  );

};

export default ContactForm;

