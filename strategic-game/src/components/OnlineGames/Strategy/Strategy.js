import { React, useEffect, useReducer, useState } from 'react'
//import data from './data.js';
import './strategy.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  return (
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
  );
}


export default Strategy