import { React, useEffect, useState } from 'react';
//import Dino from "./Dino";
import './Tournament.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Tournaments = () => {

    const [tournaments, setTournaments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/tournament');
            setTournaments(result.data);
        };
        fetchData();
    }, []);

    return (
        <div class="main-tournament" style={{ backgroundImage: "url(./images/tournament-background.jpeg)" }}>
            <div class="tall-header">
                <h4 class="heading-h4">Tournament</h4>
                <span class="header large">Games</span>
            </div>

            <div className="tournaments">

                {tournaments.map((tournament) => (
                    <div className="tournament" key={tournament.slug}>
                        <div class="tournament-cont" style={{ backgroundImage: "url(./images/tournament-container-bg.jpg)" }}>
                            <div class="flex-container">
                                <div class="flex-child games-img">
                                    <a href="/Strategy" ><img src={tournament.image} alt={tournament.name} /></a>
                                </div>

                                <div class="flex-child txt-cont" style={{ backgroundImage: "url(./images/tournament-text-bg.jpg)" }}>
                                    <p class="tournament-p">{tournament.description}</p>
                                    <div class="view-tour">
                                        <a href={tournament.link} target="_blank" rel="noreferrer" >{tournament.linkDesc}</a></div>
                                    <a class="tour-button" href="/Puzzle">
                                        <Button class="button" variant="primary">BUY</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Tournaments