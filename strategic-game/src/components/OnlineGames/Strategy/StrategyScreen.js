import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './strategy.css';
import UserHome from "../../User-header.js";
import logo from '../../images/logo.png';

function StrategyScreen() {
  const params = useParams();
  const { slug } = params;
 // const thisGame = data.games.find(game => game.slug === slug);

 // Will fetch the record with unique slug
  const [pgame, setGames] = useState([]); //DB data gets stored in 'pgame' variable
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/api/strategy/slug/${slug}`); // api fetches single record based on slug
      setGames(result.data);
    };
    fetchData();
  }, [slug]);

  console.log(pgame);

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

<div class="strategy_main" style={{ backgroundImage: "url(./images/strategy-bg-img.jpg)"}}>
<Row>
  <Col md={6}>
    <img
      className="strategyimg zoom-in-zoom-out"
      src={pgame.image}
      alt={pgame.name}
    ></img>
  </Col>
  <Col md={3}>
    <ListGroup variant="flush">
      <ListGroup.Item>

        <h1>{pgame.name}</h1>
      </ListGroup.Item>

      <ListGroup.Item><strong>Rating : </strong>{pgame.rating}</ListGroup.Item>
      <ListGroup.Item class="descr-item">
        <h4>Description:</h4>
        <p>{pgame.description}</p>
      </ListGroup.Item>
    </ListGroup>
  </Col>

  <Col md={3}>
    <Card class="main-card">
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item variant="success">
            <Row>
              <Col>Price:</Col>
              <Col><strong>${pgame.price}</strong></Col>
            </Row>
          </ListGroup.Item>
          
            <ListGroup.Item action variant="info">
              <div className="d-grid">
              <a href={pgame.link} target="_blank" rel="noreferrer">
                <Button class="button" variant="primary">Play</Button>
              </a>
              </div>
            </ListGroup.Item>

        </ListGroup>
      </Card.Body>
    </Card>
  </Col>
</Row>
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
    )
 
}

export default StrategyScreen;


