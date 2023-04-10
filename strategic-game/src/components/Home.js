import React from 'react';
import Header from './Header';
import PaymentForm from './User_panel/CheckoutForm';


const Home = () =>{
    return <div>
       <header>
      
      <Header />
      
    </header>
    <div>
    This is a home page 
    <h1>Stripe Payment Form</h1>
      <PaymentForm />
    </div>
        
     
       
    </div>;
}
export default Home;