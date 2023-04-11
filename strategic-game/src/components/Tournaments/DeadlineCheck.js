import { React, useEffect, useState } from 'react';
import axios from 'axios';

const DeadlineCheck = () => {

    const [status, setStatus] = useState("Submit");
    const sendNotification = async (useremail, gamename) => {
        setStatus("Sending...");
        let details = {
            email: useremail,
            name: gamename
        };
        let response = await fetch("http://localhost:4000/sendnotification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    const resetForm = () => {
        this.setState({ name: '' })
    };

    //----------------------------------------------------//

    const [upcomingTournaments, setTournaments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/upcomingTournament');
            setTournaments(result.data);
        };
        fetchData();
    }, []);

    let [slug, setSlug] = useState("DJ-1");
    var currentdate = Date();
    let count = 0, max = 0;
    let useremail = "";
    let gamename = "";
    console.log(currentdate);

    for (let i = 0; i < upcomingTournaments.length; i++) {
        console.log("date:", upcomingTournaments[i].endDate);
        console.log("slug:", upcomingTournaments[i].slug);
        if (upcomingTournaments[i].endDate < currentdate) {
            console.log("yes date is past");
            setSlug(upcomingTournaments[i].slug);
            console.log("inside slug", slug);
            gamename = upcomingTournaments[i].name;
        }
    }

    console.log("outside slug", slug);
    let newslug = slug;
    console.log("new slug", newslug);
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchplayed = async () => {
            const result = await axios.get(`http://localhost:5000/api/playedTournament/tourCode/${slug}`);
            setGames(result.data);
        };
        fetchplayed();
    }, [slug]);


    for (let j = 0; j < games.length; j++) {
        console.log("score:", games[j].score);
        if (games[j].score > max) {
            max = games[j].score;
            console.log("inside high score:", max);
            count = j;
            useremail = games[j].useremail;
        }
    }
    console.log("high score:", max);
    console.log("user email:", useremail);
    console.log("game namel:", gamename);



    if (useremail & gamename) {
        sendNotification(useremail, gamename);
    }

    return(
        <div>
            deadline check
        </div>
    )

}
export default DeadlineCheck