import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import data from '../data.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './puzzle.css';


function PuzzleScreen() {
  const params = useParams();
  const { slug } = params;
 // const thisGame = data.games.find(game => game.slug === slug);

 // Will fetch the record with unique slug
  const [pgame, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/api/puzzles/slug/${slug}`);
      setGames(result.data);
    };
    fetchData();
  }, [slug]);

  console.log(pgame);

return (

<div class="puzzle-main" style={{ backgroundImage: "url(./images/puzzle-bg-img.jpg)"}}>
<Row>
  <Col md={6}>
    <img
      className="puzzleimg"
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
              <a class="play-button" href={pgame.link} target="_blank" rel="noreferrer">
                <Button class="button" variant="primary">Play</Button>
              </a>
              <a href="">
              <Button class="button" variant="primary">Buy</Button>
              </a>
              </div>
            </ListGroup.Item>

        </ListGroup>
      </Card.Body>
    </Card>
  </Col>
</Row>
</div>
    )
 
}

export default PuzzleScreen;


