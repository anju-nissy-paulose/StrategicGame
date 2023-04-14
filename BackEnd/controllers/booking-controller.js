const Booking = require('../model/booking');
//const validator = require('validator');

const { sendSuccessNotification } = require('../sendEmail');

const booking = async (req, res, next) => {
    const { name,   
        email,
        phone,
        date,
         time} = req.body;
        
    let booking;
    try {
      booking = new Booking({
        name,
       email,
       phone,
       date: new Date('2023-04-30T12:00:00Z'),
        time
      });
      //const userEmail = req.body.email;

      // Save booking details to database
      // ...
  
      sendSuccessNotification(email);
  
      await booking.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!booking) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ booking });
  };


//   const { sendSuccessNotification } = require('./sendEmail');

//   const sendMail = async (req, res, next) => {
//     const userEmail = req.body.email;

//     // Save booking details to database
//     // ...

//     sendSuccessNotification(userEmail);

//     res.status(200).send('Booking successful.');
// };
exports.booking = booking;
exports.sendMail = booking;