import React from 'react';
import './Home.css';
import ImageSlider from "./ImageSlider";
import ProductSlider from './ProductSlider';
import Header from '../Header';
import logo from '../images/logo.png';

const Ad_url = "https://www.chessbazaar.com/"   // URL for Advertisement

const Home1 = () => {

  return (
    <div>
         <header>
      
      <Header />
      
    </header>
    <div class="main-home" style={{ backgroundImage: "url(./images/home-background.jpg)" }}>
         

      {/* Video and Advertisement div */}
      <div class="video_and_ad">
        
        {/* Advertisement div */}
        <div class="Advertisement">
          <div class="video-container_Ad">
            <div className='video_mainAd'>
              <a class="videoAd_url" href={Ad_url} target="_blank" rel="noreferrer">
                <video class="videoAd" src="./images/videoAd.mp4" autoPlay loop muted />
              </a>
              <div class="Ad_Text">Click On Avertisement</div>
            </div>
          </div>
        </div>

        {/* Video div */}
        <div class="homevideo">
          <div class="video-container">
            <div className='video_main'>
              <video class="videobg" src="./images/videoBg.mp4" autoPlay loop muted />
              <div class="overlay">
                <h1>Welcome To Strategic Games</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Products div */}
      <div class="products" style={{ backgroundImage: "url(./images/home-container-background.jpg)" }}>
        <h4>Game Products</h4>
        <div class="news-container">
          <ProductSlider />
        </div>
      </div>

      {/* Online Games div */}
      <div class="onlinegames" style={{ backgroundImage: "url(./images/home-container-background.jpg)" }}>
        <h4>Online Games</h4>
        <div class="img-container">
          {/* individual game category div */}
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/Strategy" ><img src="./images/strategy-img.jpg" alt="img" /></a>
            <div class="hovercap">Strategic Games</div>
          </div>
          {/* individual game category div */}
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/Puzzle" ><img src="./images/puzzle-img.jpg" alt="img" /></a>
            <div class="hovercap">Puzzles</div>
          </div>
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/Puzzle" ><img src="./images/racing-img.jpg" alt="img" /></a>
            <div class="hovercap">Racing</div>
          </div>
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/A_Puzzles" ><img src="./images/action-img.jpg" alt="img" /></a>
            <div class="hovercap">Action</div>
          </div>
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/DeadlineCheck" ><img src="./images/fantasy-img.png" alt="img" /></a>
            <div class="hovercap">Fantasy</div>
          </div>
          <div class="hoverwrap hoverwrap-game">
            <a class="onlinegames-img" href="/VideoMain" ><img src="./images/brain-img.jpg" alt="img" /></a>
            <div class="hovercap">Brain Games</div>
          </div>
        </div>
      </div>

      {/* Tutorial div */}
      <div class="tutorial-home" style={{ backgroundImage: "url(./images/home-container-background.jpg)" }}>
        <h4>Tutorial</h4>
        <div class="img-container">
          <div class="hoverwrap">
            <a class="prod-img" href="/Puzzle" ><img src="./images/beginner-img.jpg" alt="img" /></a>
            <div class="hovercap">Beginner Level</div>
          </div>
          <div class="hoverwrap">
            <a class="prod-img" href="/Puzzle" ><img src="./images/advanced-img.jpg" alt="img" /></a>
            <div class="hovercap">Advanced Level</div>
          </div>
        </div>
      </div>

      {/* Tournaments div */}
      <div class="tournament-home" style={{ backgroundImage: "url(./images/home-container-background.jpg)" }}>
        <h4>Tournaments</h4>
        <div class="change-photos">
          <div class="change-photo">
            <a class="prod-img" href="/Tournaments" ><img src="./images/tournament-img.jpg" alt="img" /></a>
          </div>
          <div class="hoverwrap hoverwrap-tour change-photo">
            <a class="prod-img" href="/Tournaments" ><img src="./images/champion-img.jpg" alt="img" /></a>
            <div class="hovercap">Be A Champion</div>
          </div>
        </div>
      </div>

      {/* News Blog div */}
      <div class="news-blog">
        <h4>News Blog</h4>
        <div class="news-container">
          <ImageSlider />
        </div>
      </div>

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
  );
}

export default Home1;