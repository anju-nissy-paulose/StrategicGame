
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



const addStripe = async (req, res) => {
  try {
    const { amount, token } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'Example charge',
      source: token,
    });
    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addStripe = addStripe;