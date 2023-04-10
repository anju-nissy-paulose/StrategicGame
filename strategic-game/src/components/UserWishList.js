import axios from 'axios';
import React, { useState, useEffect } from 'react';
function UserWishlist({ userId }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`/wishlist/${userId}`);
        setWishlist(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching wishlist.');
      }
    };

    fetchWishlist();
  }, [userId]);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((item) => (
          <li key={item._id}>{item.productId}</li>
        ))}
      </ul>
    </div>
  );
}


export default UserWishlist;
