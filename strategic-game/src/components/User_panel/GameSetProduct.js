import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameSetProduct = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/gamesets/${props.match.params.id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  console.log(product)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add more details here */}
    </div>
  );
}

export default GameSetProduct;
