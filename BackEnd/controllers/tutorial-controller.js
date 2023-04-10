const Tutorial = require("../model/tutorial");
const redis = require('redis');
//let redisClient;

// Redis connection
// (async () => {
//   redisClient = redis.createClient();
//   redisClient.on('error', (error)=> console.log('redis error'+error));
//   await redisClient.connect();
// })();

const getAllTutorial = async (req, res, next) => {

  // const cachedData = await redisClient.get('gamebooks');
  // if(cachedData) {
  //     res.send(JSON.parse(cachedData));
  //     return;
  //     // const books = JSON.parse(cachedData)
  //     // return res.status(200).json({ books});
  // }
 

  let tutorials;
  try {
    tutorials = await Tutorial.find()
    // const books = {status: 'success', data: books};
    // await redisClient.set('gamebooks', JSON.stringify(books));
    
  } catch (err) {
    console.log(err);
  }

  if (!tutorials) {
    return res.status(404).json({ message: "No products found" });
  }

  setTimeout(() => {
    return res.status(200).json({ tutorials });
}, 1000);

};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let tutorial;
  try {
    tutorial = await Tutorial.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!tutorial) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ tutorial });
};

const addTutorial = async (req, res, next) => {
  const { name,
    category,
    description,
    professorName,
    time,
    deliverymode,
    price, 
    availableDate, 
    image,} = req.body;
  let tutorial;
  try {
    tutorial = new Tutorial({
      name,
      category,
      description,
      professorName,
      time,
      deliverymode,
      price, 
      availableDate, 
      image,
    });
    await tutorial.save();
  } catch (err) {
    console.log(err);
  }

  if (!tutorial) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ tutorial });
};

const updateTutorial = async (req, res, next) => {
  const id = req.params.id;
  const { name,
    category,
    description,
    professorName,
    time,
    deliverymode,
    price,
    availableDate,  
    image, } = req.body;
  let tutorial;
  try {
    book = await Tutorial.findByIdAndUpdate(id, {
      name,
      category,
      description,
      professorName,
      time,
      deliverymode,
      price,
      availableDate,  
      image,
    });
   
    tutorial= await tutorial.save();
  } catch (err) {
    console.log(err);
  }
  if (!tutorial) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({tutorial });
};

const deleteTutorial = async (req, res, next) => {
  const id = req.params.id;
  let tutorial;
  try {
    tutorial = await Tutorial.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!tutorial) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllTutorial = getAllTutorial;
exports.addTutorial = addTutorial;
exports.getById = getById;
exports.updateTutorial = updateTutorial;
exports.deleteTutorial = deleteTutorial;