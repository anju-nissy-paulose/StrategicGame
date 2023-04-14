import { React, useEffect, useReducer, useState } from 'react'
//import data from './data.js';
import './strategy.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserHome from "../../User-header.js";
import logo from '../../images/logo.png';

const Strategy = () => {

  const [games, setGames] = useState([]);  // DB data gets stored in 'games' variable
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/strategy'); //Fetches the mongo DB data
      setGames(result.data);
    };
    fetchData();
  }, []);

  console.log(games);

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
    <div>
      <UserHome userData={userData} />
   
    <div class="strategy_main" style={{ backgroundImage: "url(./images/strategy-bg-img.jpg)" }}>
      <h2 class="strategy_h2">Strategic Games</h2>
      <div className="games">
        {/* DB data maps into variable 'game' */}
        {games.map((game) => (
          <div className="strategy" key={game.slug}>  {/* uses slug(unique) value as key*/}
            {/* Link to next URL page */}
            <Link to={`/strategy/${game.slug}`}>
              <img class="strategy-img" src={game.image} alt={game.name} />
            </Link>

            <div className="game-info">
              <p>{game.name}</p>
              <p>
                <strong>${game.price}</strong>
              </p>
              {/* Link to next URL page */}
              <Link to={`/strategy/${game.slug}`}>
                <button className="btn1">Game On</button>
              </Link>
            </div>
          </div>
        ))}
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
}


export default Strategy