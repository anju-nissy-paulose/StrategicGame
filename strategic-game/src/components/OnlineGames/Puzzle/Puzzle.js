import { React, useEffect,  useState } from 'react'
//import data from './data.js';
import './puzzle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import logger from 'use-reducer-logger';



const Puzzle = () =>  {

  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/puzzles');
      setGames(result.data);
    };
    fetchData();
  }, []);

  console.log(games);

  return (
    <div class="puzzle-main" style={{ backgroundImage: "url(./images/puzzle-bg-img.jpg)"}}>
      <h2>Puzzle Games</h2>
      <div className="games">
     
        {games.map((game) => (
          <div className="game" key={game.slug}>
            <Link to={`/game/${game.slug}`}>
        
              <img class="game-img" src={game.image} alt={game.name} />
              </Link>
            
            <div className="game-info">
        
                <p>{game.name}</p>
              
              <p>
                <strong>${game.price}</strong>
              </p>
              <Link to={`/game/${game.slug}`}>
              <button className="btn1">Game On</button>
              </Link>
            </div>
          </div>
        ))}
        </div>

    </div>
  );
}


export default Puzzle