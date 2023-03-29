import React from 'react';
import aboutUs from '../images/aboutUs.jpg';
import Header from './Header';

const AboutUs = () =>{
    return <div>
         <header>
      
      <Header />
      
    </header>
        <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            
                            <h2>About Us </h2>
                        </div>
                        <div class="text">Strategic Games is a not-for-profit organization. The organization was
                          established few years ago and provides the educational and entertainment services:
                          Selling mind games sets such as chess, checker, etc at its offices and locations
                          across Canada. Selling books on mind games sets such as chess, checker, etc at its offices and
                          locations across Canada. Renting the items (game sets, printed materials, etc).
                          Provides the classes (including master classes) to teach strategic games in its
                          locations.Provides the beginner level classes to teach strategic games in the primary schools
                          during the recreations.Organizes the tournaments in mind games such as chess, checker in their
                          locations. Custom web platform for training and playing online strategy games and tracking
                          the performance.</div>
                      
                        <div class="btn-box">
                            <a href="#" class="theme-btn btn-style-one">Contact Us</a>
                        </div>
                    </div>
                </div>

           
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                        <h2>Strategic Game </h2>
                  
                      </div>
                        <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src={aboutUs} width={400} height={500} alt=""/></a></figure>
                     
                    </div>
                </div>
              
            </div>
           <div class="sec-title">
                            <h1 class="title" style={{color:"blue"}}>Our Future Goal</h1>
                            <h4>We want to lead in innovation & Technology</h4>
                        </div>
          <div class="text">
                We works on UI/UX and functionality as well so that a plugins comes with proper stucture & stunning looks which suits to your web app & website.
              </div>
               <div class="text">
                We take a small toolkit here and ride it well so that it is fit for your use. One who performs well and looks even better.
              </div>
               <div class="text">                
Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
              </div>
               <div class="text">
                Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
              </div>
               <div class="text">
                
In the end, I would say keep visiting our website and enjoy the quality content.
              </div>
        </div>
    </section>
    </div>;
}
export default AboutUs;