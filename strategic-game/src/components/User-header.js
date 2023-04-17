//import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import wishList from '../images/wishlist.png';
import account from '../images/account.png';
import myCart from '../images/cart.png';
//import Home1 from '../components/Home/Home1';
import { React ,useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Cart from './OnlineGames/Puzzle/Cart';

const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/Login";
};

const User_Header = ({ userData }) =>{
  const { state } = useContext(Cart);
  const { cart } = state;

    return <div>
      
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand" href="#" style={{paddingRight:"35em"}}>Welcome to Canada Mind Games</a>

      <a class="nav-item nav-link" href="/userStoreLocation" style={{paddingRight:"5em"}}>Store Location</a>
      <a class="nav-item nav-link" href="/Support" style={{paddingRight:"5em"}}>Support</a>
      <a class="nav-item nav-link " href="#" onClick={logOut} >Log Out  </a>

   
 

</nav>

  </div>

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand App-logo App-logo-spin" href="/Home1" style={{paddingRight:"10em"}}><img src={logo} width={80} height={80} /></a>
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
        {/* <a class="nav-link" href="#" ><img src={wishList} width={35} height={35} /></a> */}
        <a class="nav-link" href="/CartScreen" ><img src={wishList} width={35} height={35} />
        {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                  </a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
      <a class="nav-link" href="/Account"  ><img src={account} width={30} height={30} />{userData.fname}</a>
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
          <a class="dropdown-item" href="/Strategy">Strategy</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/Puzzle">Puzzles</a>
          <div class="dropdown-divider"></div>
          
          
        </div>
      </li>
      
      
      <li class="nav-item" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="/Tutorial">Tutorial </a>
      </li>
      <li class="nav-item" style={{paddingRight:"5em"}}>
        <a class="nav-link" href="/Tournaments">Tournament </a>
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
