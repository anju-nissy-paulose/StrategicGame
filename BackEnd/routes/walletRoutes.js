const express = require('express')
const WalletModel = require('../model/walletModel');

const walletRouter = express.Router();

//localhost:5000/api/wallet   -- Will return the entire schema data
walletRouter.get('/', async (req, res) => {
  const wallet = await WalletModel.find();
  res.send(wallet);
});

//localhost:5000/api/wallet/useremail/:useremail  --- Searches by unique useremail value for only one document
walletRouter.get('/useremail/:useremail', async (req, res) => {
  const wallet = await WalletModel.findOne({ useremail: req.params.useremail });
  if (wallet) {
    res.send(wallet);
  } else {
    res.status(404).send({ message: 'wallet Not Found' });
  }
});

//localhost:5000/api/wallet/:id  --- Searches by unique ID value for only one document
walletRouter.get('/:id', async (req, res) => {
  const wallet = await WalletModel.findById(req.params.id);
  if (wallet) {
    res.send(wallet);
  } else {
    res.status(404).send({ message: 'wallet Not Found' });
  }
});
//localhost:5000/api/wallet/  --- Creates a new wallet record in the DB (POST)
walletRouter.post('/', async (req, res) => {
  const { useremail,credit } = req.body;
  let wallet;
  try {
    wallet = new WalletModel({
      useremail,
      credit,
    });
    await wallet.save();
  } catch (err) {
    console.log(err);
  }

  if (!wallet) {
    return res.status(500).json({ message: "Unable To Add wallet" });
  }
  return res.status(201).json({ wallet });
});

module.exports = walletRouter;