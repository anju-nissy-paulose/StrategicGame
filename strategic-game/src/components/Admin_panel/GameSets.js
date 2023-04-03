import React ,{ useEffect, useState } from "react";
import axios from "axios";
import GameSet from "./GameSet";
const URL = "http://localhost:5000/gamesets";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  const GameSets = () => {
    const [gamesets, setGame] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setGame(data.gamesets));
    }, []);
    console.log(gamesets);

    return (
      <div>  
        <section>
          <div className="container  ml-5 mt-5">
            <div className="row"> 
            <a href="/addGameSet" className="btn btn-success">Add Product </a>
            </div>
          </div>

         <div className="cotainer ml-8 mt-5" >
         
        
    
          
         {gamesets &&
            gamesets.map((gameSet , i) => (
            
     
             <div key={i}>
                <GameSet gameSet ={gameSet } />
                </div> 
      
      
            ))}
        
     
         </div>
        

              
         </section>   
       
        
      </div>
    );
    
    };
    
export default GameSets;