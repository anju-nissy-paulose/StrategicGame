import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';

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
  <div class="col-lg-3 my-4 d-flex align-items-center ml-8">
  
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
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
  </div>
</div>

    
  );
  }

export default LocationList;
