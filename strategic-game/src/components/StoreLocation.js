import React, {Component, useState, useEffect } from 'react';
//import axios from 'axios';
import Header from './Header';
import logo from '../images/logo.png';
//import React, {  } from 'react';
//import { Map, GoogleApiWrapper } from 'google-maps-react';





function LocationList() {
  

  return (
    <div>
       <header>
      
      <Header />
      
    </header>
<div class="row w-100">
  <div class="col-lg-8 my-4">
    <iframe
      src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
      class="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
  </div>

  <div class="col-lg-3 mx-5 d-flex align-items-center">
  
            <ul class="list-unstyled">
              <li>
              <h1 style={{fontFamily:'serif'}}>Our Main Location</h1>
                <a href='https://www.google.com/maps/@43.6179639,-79.6614266,15z'><i class="fas fa-map-marker-alt fa-2x text-primary mt-5"></i> </a>    
                <h4><small>Mississauga, L4Z 3J9, ON,Canada</small></h4>
              </li>
              <li>
                <i class="fas fa-phone fa-2x text-primary"></i>
                <h4><small>+1 234 567 890</small></h4>
              </li>
              <li>
              <a href="mailto:strategicgameofc@gmail.com"><i class="fas fa-envelope fa-2x text-primary"></i></a>
                <h4><a href="mailto:strategicgameofc@gmail.com"><small style={{color:'black'}}>strategicgameofc@gmail.com</small></a></h4>
              </li>
            </ul>
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
 
</div>

    
  );
  }
 
 export default LocationList ;
