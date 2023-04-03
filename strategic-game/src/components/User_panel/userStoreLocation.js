import React, {Component, useState, useEffect } from 'react';
//import axios from 'axios';
import Header from '../Header';
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
              <h1>Our Main Location</h1>
                <i class="fas fa-map-marker-alt fa-2x text-primary mt-5"></i>     
                <p><small>Mississauga, L4Z 3J9, ON,Canada</small></p>
              </li>
              <li>
                <i class="fas fa-phone fa-2x text-primary"></i>
                <p><small>+ 01 234 567 89</small></p>
              </li>
              <li>
                <i class="fas fa-envelope fa-2x text-primary"></i>
                <p><small>strategicgameofc@gmail.com</small></p>
              </li>
            </ul>
          </div>
          <div class="container-fluid mt-3">
  
  <div class="row">
    <div class="col p-4 bg-dark text-white">
      
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
