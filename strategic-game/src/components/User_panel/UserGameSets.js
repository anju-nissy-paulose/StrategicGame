import React ,{ useEffect, useState } from "react";
import axios from "axios";
import UserHome from "../User-header";
import { Link } from 'react-router-dom';
import AddToWishlist from './WishList';

import logo from '../images/logo.png';

const URL = "http://localhost:5000/gamesets";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

function GameSets({ userId, productId }) {
  const [gamesets, setGameSets] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setGameSets(data.gamesets));
  }, []);
  console.log(gamesets);


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

  //background image
 

    return (
      <div >        
         <UserHome userData={userData} />
          <div class="container mt-5 ">
                    
                 


                <div class="row">
                         
                            {gamesets &&
                      gamesets.map((game, i) => (
                        <div className="card col-lg-3  m-1"  style={{width:'18em'}}  key={i}>
                                <div class="card-body"   >
                                    <img class="card-img-top" src={game.image}  alt="Card"/>
                                    <div class="card-body" >
                                        <h5 class="card-title" ><Link to={`/products/${game._id}`}> {game.name} </Link></h5>
                                        <p class="card-text">{game.description}<AddToWishlist userId={userData._id} productId={game._id} /></p>
                                        <p class="card-text">{game.author}</p>
                                        <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>${game.price} </b>
                                        
                                        
                                        </li>
                                         </ul>
                                       
                                         <a href="#" class="btn btn-primary"> My Cart </a>                            
                                        <a href="/StripeForm" style={{marginLeft:'.5em'}}  class="btn btn-primary"> Buy </a>
                                        
                                        
                                    </div>
                                </div>

                                </div>  
                                ) )} 

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
    
    };
    
export default GameSets;