const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(4000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "ronaldthomastest@gmail.com",
      pass: "gtllsgpxghmblqqq",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone; 
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "ronaldthomastest@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

  //------------------------Deadline Notification---------------//
  router.post("/sendnotification", (req, res) => {
    const email = req.body.email;
    const gamename = req.body.name;
    const mail = {
      from: 'ronaldthomastest@gmail.com',
      to: email,
      subject: "Congragulations",
      text: "You have won the tournament"+gamename
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });


//--------------------Testing-------------------------//

