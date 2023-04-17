import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './account.css';
import UserHome from "../User-header.js";
import logo from '../images/logo.png';

export default function PersonalProfile() {
    const [wallet, setWallet] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`http://localhost:5000/api/wallet/useremail/anju@gmail.com`);
        setWallet(result.data);
      };
      fetchData();
    }, []);

    const [games, setGames] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`http://localhost:5000/api/playedTournament/useremail/ronaldthomas8793@gmail.com`);
        setGames(result.data);
      };
      fetchData();
    }, []);

    let userimage = './images/avatar-img.png';
    
    if(wallet.userimage){
        userimage = wallet.userimage;
        console.log("userimage: ",userimage);
    } 

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
    <div><UserHome userData={userData} />
    <section className="vh-100" style={{ backgroundImage: "url(./images/tournament-background.jpeg)" }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundImage: "url(./images/home-container-background.jpg)" }}>
        <MDBRow className="justify-content-center align-items-center h-100 ">
          <MDBCol className="profile-container">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white profile-container"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={userimage}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Anju P</MDBTypography>
                  <MDBCardText>GAMER</MDBCardText>
                  <a className="update-icon" href=""><MDBIcon far icon="edit mb-5" />Update</a>
                </MDBCol>
                <MDBCol className="otherDetails">
                  <MDBCardBody className="">
                    <MDBTypography className="info-text-data" tag="h6">MY ACCOUNT</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" className="content-text">Email</MDBTypography>
                        <MDBCardText className="profile-text">{wallet.useremail}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" className="content-text">Wallet</MDBTypography>
                        <MDBCardText className="profile-text">CAD {wallet.credit} </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6" className="content-text">Tournaments Enrolled</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Games</MDBTypography>
                        {games.map((game) => (
          <div className="account-game" key={game.id}>
                        <MDBCardText className="profile-text">{game.name}</MDBCardText>
                        </div>
                        ))}
                      </MDBCol>
                      
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a class="profile-anchor" href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a class="profile-anchor" href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a class="profile-anchor" href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
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