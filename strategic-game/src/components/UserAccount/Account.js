import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './account.css';

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

  return (
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
  );
}