import React from 'react';
//import { Link } from 'react-router-dom';
//import logo from '../images/logo.png';
//import wishList from '../images/wishlist.png';
//import account from '../images/account.png';
//import myCart from '../images/cart.png';
//logout
const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/Login";
};


const Admin_header= () =>{
    return (<div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Admin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
    <span class="navbar-toggler-icon"></span>
  </button>
  
 
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/gameBooks" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        All Products 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/gameBooks">Game Books</a>
          <a class="dropdown-item"href="/gameSets">Game Sets</a>
        
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">All Orders</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        All Users
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/StoreLocation">Store Location</a>
      </li>
    </ul>
    
    <a class="navbar-brand" href="#" onClick={logOut}>Log Out </a>
  </div>
</nav>
   




    </div>
    );
};
export default Admin_header;
