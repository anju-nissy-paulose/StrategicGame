import React ,{ useEffect, useState } from "react";
import axios from "axios";
import GameSet from "./GameSet";
const URL = "http://localhost:5000/gamesets";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  const GameSets = () => {
    const [gameSets, setGame] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setGame(data.gameSets));
    }, []);
    console.log(gameSets,"wee");

    return (
      <div>  
        <section>
          <div className="container  ml-5 mt-5">
            <div className="row"> 
            <a href="/addGameSet" className="btn btn-success">Add Product </a>
            </div>
          </div>
         <div className="cotainer ml-8 mt-5" >
         <table class="table ml-8 ">
      <thead class="thead-dark"style={{paddingLeft:"15em"}}>
            <tr >
              <th scope="col" style={{paddingRight:"8em"}}>Name</th>
              <th scope="col" style={{paddingRight:"5em"}}>Material</th>
              <th scope="col" style={{paddingRight:"25em"}}>Theme</th>
              <th scope="col" style={{paddingRight:"1em"}}>No Of Players</th>
              <th scope="col" style={{paddingRight:"5em"}}>Colour</th>
              <th scope="col" style={{paddingRight:"5em"}}>Description</th>
              <th scope="col" style={{paddingRight:"5em"}}>Price</th>
              <th scope="col" style={{paddingRight:"5em"}}>Image</th>
              <th scope="col" style={{paddingRight:"5em"}}>Modify Customer</th> 
            </tr>
          </thead>
          </table>
          <div>
          <ul style={{ listStyle: 'none' ,marginRight:"1em" }}> 
          
         {gameSets &&
            gameSets.map((gameSet , i) => (
            
     
             <li key={i}>
                <GameSet gameSet ={gameSet } />
                </li> 
      
      
            ))}
         </ul>
          </div>
         </div>
        

              
         </section>   
       
        
      </div>
    );
    
    };
    
export default GameSets;