import {React, useEffect, useState } from "react";
import "./Dino.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const ValidatePlayed = () => {

    const params = useParams();
    const { slug } = params;
    const [count, setCount] = useState(0);
    let newcount = 0;
    let flag = 0;  // to check no user found
    let fakecondition = "false";
    console.log(slug);
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:5000/api/playedTournament/tourCode/${slug}`);
            setGames(result.data);
        };
        fetchData();
    }, [slug]);

    console.log(games);
    console.log("length: ", games.length);

    for (let i = 0; i < games.length; i++) {
        console.log("emai:", games[i].useremail);
        if (games[i].useremail === "ronaldthomas8793@gmail.com") {
            newcount = newcount + 1;
            console.log("newcount: ", newcount);
            break;
        }
        flag = flag +1;
        if (flag == games.length){
            fakecondition="true"; // no user found
        }
    }
    console.log("outside newcount: ", newcount);
    // console.log("count: ",count);
    const goback = () => {
        console.log("go back already played!");
        alert("You have already participated!");
        window.history.back();
    }
    if (newcount > 0) {
        goback();
      
      console.log("count>0")
     // window.history.back();
   //  window.location.replace("http://localhost:3000/UpcomingTour/");
        
    }
    if(newcount == 0 & fakecondition == "true"){
        window.location.replace(`http://localhost:3000/UpcomingTour/${slug}`);
    }
    
}

export default ValidatePlayed