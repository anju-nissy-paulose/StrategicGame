import React from 'react';
import Header from '../Header';
//import tutorial from '../';
import arrow from '../images/arrow'
import logo from '../images/logo.png';

const Tutorial = () => {
  return (
    <div>
        <div>
       < header>
      
      <Header />
      
    </header>
        </div>
        <div className='mt-2'>
        {/* <h1 style={{textAlign:'center',textDecorationLine:'underline'}}>How to Play the Game</h1> */}
        </div>
        <div class="container mt-5" style={{width:'100em'}}>
        <div class="row">
            <div class="col-4 col-md-4 mt-5">
            <div class="row " style={{fontSize:'3em',textDecoration:'none'}}>  
            Grab your <a href='/Tutorialpage' style={{textDecoration:'none',color:'#000080'}}>
              <img src={arrow} width={150} height={150} alt='arrow'/>
              <b style={{fontFamily:'cursive'}}> Tutorials</b> </a> </div>
            <div class="row mt-4" style={{backgroundColor:'#C0C0C0'}}>
              <h2 style={{alignItems:'center',color:'black'}}>Tagged</h2></div>
            <div class="row mt-1">
                <div class="col " style={{backgroundColor:'#008080'}}> 
                <h6  style={{color:'white',fontFamily:'monospace',textDecoration:'none'}}>Beginner </h6></div>
                <div class="col , ml-1 "  style={{backgroundColor:'#008080'}}>
                     <h6 style={{color:'white',fontFamily:'monospace',textDecoration:'none'}}> Advanced  </h6></div>
                
        </div>
        <div class="row mt-1">
                <div class="col " style={{backgroundColor:'#F08080'}}> <h6 style={{color:'white',fontFamily:'cursive'}}>In-Person </h6></div>
                <div class="col , ml-1 "  style={{backgroundColor:'#F08080'}}> <h6 style={{color:'white',fontFamily:'cursive'}}>Live</h6></div>
                <div class="col , ml-1 "  style={{backgroundColor:'#F08080'}}> <h6 style={{color:'white',fontFamily:'cursive'}}>Pre-Recorded</h6></div>
                
        </div>
        <div class="row mt-4" style={{backgroundColor:'#C0C0C0'}}><h2 style={{alignItems:'center',color:'black'}}>Share</h2></div>

        <div class="row mt-1">
                <div class="col" style={{backgroundColor:'white'}}> 
                <a href='https://www.facebook.com' style={{textDecoration:'none'}}> <i class="fab fa-facebook-f fa-2x"  style={{color: '#3b5998'}} ></i> </a>
                <a href='https://web.whatsapp.com' style={{textDecoration:'none'}}><i class="fab fa-whatsapp fa-2x" style={{color: '#25d366',paddingLeft:'.5em'}}></i></a>
                <a href='https://www.instagram.com' style={{textDecoration:'none'}}> <i class="fab fa-instagram fa-2x" style={{color: '#ac2bac',paddingLeft:'.5em'}}></i></a>
                
                </div>
                
                
        </div>
        <div class="row mt-4" style={{backgroundColor:'#C0C0C0'}}><h2 style={{alignItems:'center',color:'black'}}>Reach out to us</h2>
        
        </div>
        <div class="row mt-1">
                <div class="col" style={{backgroundColor:'white'}}> 
                <p>Get your questions answered about learning with Strategic Game.</p>
                <p><i class="fa fa-phone" aria-hidden="true"> +1-437-679-2660</i> </p>
                
                </div>
                
                
        </div>
            </div>

            <div class="col-md-8 ">
            
            <h2 style={{fontFamily:'cursive', color:'CaptionText'}}>6 STEPS TO PLAY WITH PLAYER'S MIND</h2>
       
            <h4 className='mt-3'>OPEN YOUR MIND, BUT BE CAREFUL!</h4>
            <img src='https://w0.peakpx.com/wallpaper/101/710/HD-wallpaper-open-your-mind-female-lovely-cg-eye-black-beautiful-abstract-lips-fantasy-nice-3d-dark-face.jpg' style={{width:'250px',height:'300px',marginLeft:'10em'}} alt='img'></img>
            <p>
            This is a list of 6 mental motivators for human brains, created with the objective of pleasuring and motivating 
            people to take action and to work on life-related jobs. In this case, I apply it specifically in digital gaming.
            </p>
            
            <ol>
                <li>Experience Bar (Progress Measuring) – Experience bars record the progress, something that Jesse Schell really emphasized. The idea 
                    of not rewarding the player for his achievements (tests, tasks, objectives) but by always getting 1xp,
                     for any action. This invokes a notion of always evolving.</li>
                <li>Multiple Tasks (Long and short-term) – Getting 10.000 special cards is boring: getting 10 special cards is fun. And to
                     get the 10 cards there are several small different tasks. 
                    Finding one, fight for another, studying to get another, and by getting them all, the objective of 
                    collecting is done. Short objectives together sum up to a long one, and it’s all worth it. The complex quest is split in important pieces, 
                    so that people can grasp it with the limited human vision and feel encouraged to win.</li>
                <li>Effort Reward* (All efforts are rewarded) – Every time something is done, it earns credit, experience,
                     money, pieces, blood, souls, mana, power... not just for completing, but also for trying. 
                    You don’t punish faults, but reward every little effort with small, instant rewards.</li>
                <li> Feedback to the player (Clear, quick, clean) – This is absolutely necessary. The best example is to note that 
                    people don’t always relate actions to consequences, but the human brain needs this to worry. Pollution, 
                    global warming, flooding, public violence are problems caused by us too, but the guilt is shared, the manifestation is 
                    small, and it stays out of the human worry. Because the consequences are distant in space and time, it’s hard to learn a lesson from this.
                     By direct and quick feedback they can understand, learn and change very fast.</li>
                     <li>
                     The element of uncertainty (Neurologic secret, the magical reward of the brain) - A known effort delights people, 
                     but an effort with variable possibilities fascinates the brain, makes it sparkle. Dopamine is associated with an “effort-search” 
                     behavior, so if the player has to save a tree to get a card, and by saving the tree, he also saves, unexpectedly,
                      a bird that accompanies him in his travels, this fascinates the player in a high manner. 
                     </li>
                     <li>
                     Social Network (other people are exciting) - What really excites the player the most is other people, 
                     in terms of effort, not money. In the sense of people seeing, commenting, participating, working together.
                      The Social Network organizes and carries on games by itself: it creates items, expansions, patches, and websites
                       to improve what was done by the network. In a collaborative effect, they thrill, in a “competitive” sense,
                        and they also try harder and hotter to keep up 
                     trying and growing. Competition balanced with comparison are the keys.
                     </li>
            </ol>
            <p>
            The power you get by using these 6 characteristics is huge. It’s really powerful in a good and bad sense.
             Whether for education, conscience or entertainment, as in for addiction, domination and control of the mental faculties influenced
             by centuries of evolution of the human brain to a better life, survival and interaction of our race.
            </p>
            <p>
            References:

            </p>
            <p>
            The Art of Game Design - Jesse Schell
            </p>
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
};

export default Tutorial;

