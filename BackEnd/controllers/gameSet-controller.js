const GameSet = require('../model/gameSet');


const getAllGameSets = async(req,res,next)=>{
    //this route will provide all game sets 
    let gamesets;
    try{
        gamesets = await GameSet.find()
    } 
    catch(err){
        console.log(err);
    }
    if(gamesets){
        return res.status(200).json({gamesets});
    }//json({message:"product not found"})
    else{
        return res.status(404).json({message:"product not found"});
        }
   
};

const getGameSetById = async (req, res, next) => {
    const id = req.params.id;
    let gameset;
    try {
      gameset = await GameSet.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!gameset) {
      return res.status(404).json({ message: "No product found" });
    }
    return res.status(200).json({ gameset });
  };
 //Add game sets  
const addGameSets = async(req,res,next) =>{
    const{name,description,price, material,theme,genre, noOfPlayers, colour,image}=req.body;
    let gameset;
    try {
         gameset = new GameSet({
          name,description,price, material,theme,genre, noOfPlayers, colour,image
        });
        await gameset.save();
    } 
    catch(err)  {
        console.log(err);
        }
if(!gameset){
    return res.status(500).json({message:"unable to add"});
}
return res.status(201).json({gameset})
};


// update gamesets 

const updateGameSet = async (req, res, next) => {
    const id = req.params.id;
    const{name,description,price, material,theme,genre,noOfPlayers,colour,image}=req.body;
    let gameset;
    try {
      gameset = await GameSet.findByIdAndUpdate(id, {
        name,description,price, material,theme,genre,noOfPlayers, colour,image
      });
      gameset= await gameset.save();
    } catch (err) {
      console.log(err);
    }
    if (!gameset) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ gameset });
  };

  // Delete gamesets 

  const deleteGameSet = async (req, res, next) => {
    const id = req.params.id;
    let gameset;
    try {
      gameset = await GameSet.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!gameset) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };


exports.getAllGameSets = getAllGameSets;
exports.addGameSets = addGameSets;
exports.getGameSetById = getGameSetById;
exports.updateGameSet = updateGameSet;
exports.deleteGameSet = deleteGameSet;