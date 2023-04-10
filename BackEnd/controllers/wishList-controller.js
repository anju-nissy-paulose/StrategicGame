const Wishlist = require('../model/wishList');


// const addWishList= async (req, res) => {
//     try {
//       const { userId, productId } = req.body;
  
//       const wishlist = new Wishlist({ userId, productId });
//       await wishlist.save();
  
//       res.status(200).json({ message: 'Product added to wishlist.' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error.' });
//     }
//   };

  const addWishList = async (req, res, next) => {
    const { userId, productId } = req.body;
  
    let wishlist;
    try {
      wishlist = new Wishlist({
        userId, productId,
      });
      await wishlist.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!wishlist) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ wishlist });
  };
  //get by user id 
  const getById = async (req, res, next) => {
    const id = req.params.userId;
    let wishlist;
    try {
        wishlist = await Wishlist.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!Wishlist) {
      return res.status(404).json({ message: "No User found" });
    }
    return res.status(200).json({ Wishlist });
  };
  
  exports.addWishList = addWishList;
  exports.getById = getById;
  