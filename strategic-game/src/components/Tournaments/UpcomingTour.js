import { React, useEffect, useState } from 'react';
//import Dino from "./Dino";
import './Tournament.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tournaments = () => {

    const [upcomingTournaments, setTournaments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/upcomingTournament');
            setTournaments(result.data);
        };
        fetchData();
    }, []);

    return (
        <div class="main-tournament" style={{ backgroundImage: "url(./images/tournament-background.jpeg)" }}>
            <div class="tall-header">
                <h4 class="heading-h4">Upcoming</h4>
                <span class="header large">Tournaments</span>
            </div>

            <div className="tournaments">

                {upcomingTournaments.map((tournament) => (
                    <div className="tournament" key={tournament.slug}>
                        <div class="tournament-cont" style={{ backgroundImage: "url(./images/tournament-container-bg.jpg)" }}>
                            <div class="flex-container">
                                <div class="flex-child games-img">
                                    <a href="/Strategy" ><img src={tournament.uptourimg} alt={tournament.name} /></a>
                                </div>

                                <div class="flex-child txt-cont" style={{ backgroundImage: "url(./images/tournament-text-bg.jpg)" }}>
                                    <p class="tournament-p">Ends At: {tournament.endDate}</p>
                                    <div class="view-tour">
                                    <Link to={`/ValidatePlayed/${tournament.slug}`}>REGISTER & PLAY</Link></div>
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