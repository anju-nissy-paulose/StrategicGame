import React, { useState } from 'react';
import axios from 'axios';

const AddToCartForm = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/addtocart', { product: productId, quantity });
      alert('Item added to cart');
    } catch (error) {
      console.error(error);
      alert('Error adding item to cart');
    }
  };

  return (
    <div>
        <h1>heloo</h1>
    <form onSubmit={handleSubmit}>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button type="submit">Add to Cart</button>
    </form>
    </div>
  );
};

export default AddToCartForm;
