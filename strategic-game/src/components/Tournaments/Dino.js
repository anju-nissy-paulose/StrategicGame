import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams} from 'react-router-dom';

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
        username: "Ronald",
        useremail: "ronaldthomas8793@gmail.com",
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

  return (
    <div className="dino_game">
      Score : {score}
      <div id="dino" ref={dinoRef} style={{ backgroundImage: "url(./images/dinosaur.png)" }}></div>
      <div id="cactus" ref={cactusRef} style={{ backgroundImage: "url(./images/cactus.png)" }}></div>
    </div>
  );
}

export default Dino;