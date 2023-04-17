import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams} from 'react-router-dom';
import UserHome from "../User-header.js";
import logo from '../images/logo.png';

const scoreArray = [];

function Dino() {
  //ref to get 'dino' html element in js
  const dinoRef = useRef();
  //ref to get 'cactus' html element in js
  const cactusRef = useRef();
  const [score, setScore] = useState(0);

  const params = useParams();
  const { slug } = params;
 // const thisGame = data.games.find(game => game.slug === slug);

 // Will fetch the record with unique slug
  const [pgame, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/api/upcomingTournament/slug/${slug}`);
      setGames(result.data);
    };
    fetchData();
  }, [slug]);

  console.log(pgame);

  //method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
  //so on each key press we need to add animation and remove animation
  const jump = () => {
    if (!!dinoRef.current && dinoRef.current.classList != "jump") {
      dinoRef.current.classList.add("jump");
      setTimeout(function () {
        dinoRef.current.classList.remove("jump");
      }, 300);
    }
  };

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    tour_ID: "",
    username: "",
    useremail: "",
    score: "",
    playedStatus: "",
    notificationStatus: "",
  });

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/playedTournament", {
        name: pgame.name,
        tourCode: pgame.slug,
        username: "Anju",
        useremail: "anju@gmail.com",
        score: score,
        playedStatus: "yes",
        notificationStatus: "false",
      })
      .then((res) => res.data);
  };


  const goback = () => {
    console.log("go back change")
    sendRequest();

    window.history.back();
  }

  const savescore = () => {
    scoreArray.push(score);
    console.log("scorearray:", scoreArray);
  }

  //useEffect to track whether dino position and cactus position is intersecting
  //if yes, then game over.
  useEffect(() => {
    const isAlive = setInterval(function () {
      // get current dino Y position
      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top")
      );

      // get current cactus X position
      let cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      // detect collision
      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        alert("Game Over! Thank you for participating! Your Score : " + score);
        savescore(score);
        setScore(0);
        goback();
     //   window.history.back();
      } else {
        setScore(score + 1);
      }
    }, 100);

    return () => clearInterval(isAlive);
  });

  //hook to call jump method on any keypress
  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);

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
    
    <div className="dino_game">
      Score : {score}
      <div id="dino" ref={dinoRef} style={{ backgroundImage: "url(./images/dinosaur.png)" }}></div>
      <div id="cactus" ref={cactusRef} style={{ backgroundImage: "url(./images/cactus.png)" }}></div>
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

export default Dino;