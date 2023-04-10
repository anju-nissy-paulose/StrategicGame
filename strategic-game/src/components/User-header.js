import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import wishList from '../images/wishlist.png';
import account from '../images/account.png';
import myCart from '../images/cart.png';


const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/Login";
};

const User_Header = ({ userData }) =>{
    return <div>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand" href="#" style={{paddingRight:"35em"}}>Welcome to Canada Mind Games</a>

      <a class="nav-item nav-link" href="/userStoreLocation" style={{paddingRight:"5em"}}>Store Location</a>
      <a class="nav-item nav-link" href="#" style={{paddingRight:"5em"}}>Support</a>
      <a class="nav-item nav-link " href="#" onClick={logOut} >Log Out  </a>

   
 

</nav>

  </div>

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand App-logo App-logo-spin" href="#" style={{paddingRight:"10em"}}><img src={logo} width={80} height={80} /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="input-group rounded" style={{paddingRight:"15em"}}>
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
    </span>
</div>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="#" ><img src={wishList} width={35} height={35} /></a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
      <a class="nav-link" href="#"  ><img src={account} width={30} height={30} />{userData.fname}</a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
      <a class="nav-link" href="#"><img src={myCart} width={30} height={30} /></a>
      </li>
      
    </ul>    
  </div>
</nav>


<nav class="navbar navbar-expand-lg navbar-light bg-light">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown" style={{paddingRight:"5em"}}>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Game Product
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/UserGameBooks">Mind Game Book</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/UserGameSets">Mind Game Set</a>
          
        </div>
      </li>
      <li class="nav-item dropdown" style={{paddingRight:"5em"}}>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Online Game 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Strategy</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Puzzles</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Word</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Brain Games</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Solitaire</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Poker</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Board</a>
          
        </div>
      </li>
      
      
      <li class="nav-item" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="/Tutorial">Tutorial </a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="#">Tournament </a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="/aboutUs">About Us </a>
      </li>
      
    </ul>
   
  </div>
</nav>




    </div>
};
export default User_Header;
