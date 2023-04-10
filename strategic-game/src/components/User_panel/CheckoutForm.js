import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutForm = () => {
  const [amount, setAmount] = useState(0);
  const [fName, setFname] = useState('Anju');
  const [lName, setLName] = useState('Paulose');
  const [contactNumber, setContactNumber] = useState(4376792660);

  const handleToken = (token) => {
    fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        fName,
        lName,
        contactNumber,
        token,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      <from>
      <div className="form-group">
      
      <label>
      <b style={{fontSize:'22px'}}> First Name :</b> </label>  &nbsp; 
      <input
        type="string"
        placeholder="Enter First Name"
        value={fName}
        onChange={(e) => setFname(e.target.value)}
      />
      <br/>
      <label>
       <b style={{fontSize:'22px'}}> Last Name : </b></label>  &nbsp;
      <input
        type="string"
        placeholder="Enter Last Name"
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <br/>
      <label>
      <b style={{fontSize:'22px'}}> Contact No:</b> </label>  &nbsp;
      <input
        type="number"
        placeholder="Enter contact no"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <br/>
      <label>
      <b style={{fontSize:'22px'}}> Amount : </b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
       <br/>
       <div style={{marginTop:'1em',marginLeft:'10em'}}>
      <StripeCheckout 
        stripeKey="pk_test_51Mv9KABxelXYZPcJUXxZDxsYjR2c6cSY6l5E72EEe1jSLTLyAPXl973IrVFnNZscO4902MFcgEhIjbzuhPIfINv400mqrn1ol7"
        token={handleToken}
        amount={amount * 100}
        currency="CAD"
      />
      </div>
      </div>
      </from>
    </div>
  );
};

export default CheckoutForm;
