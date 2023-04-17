import axios from 'axios';
import Wishlist from '../UserWishList';
import wishListImg from '../images/wishlist.png'
function AddToWishlist({ userId, productId }) {
  const handleAddToWishlist = async () => {
    try {
      await axios.post('http://localhost:5000/wishlist', { userId, productId });
      alert('Product added to wishlist.');
      window.location.href = '/UserGameSets ';
    } catch (error) {
      console.error(error);
      alert('Error adding product to wishlist.');
    }
  };

  return (<div>
     <a href="#" onClick={handleAddToWishlist} class="btn"> <img src={wishListImg} width={35} height={35} /></a>
    {/* <button onClick={handleAddToWishlist}>
      Add to wishlist
    </button>
    */}
    </div>
  );
}

export default AddToWishlist;
