const nodemailer = require('nodemailer');

const sgMail = require('@sendgrid/mail');

//sgMail.setApiKey("SG-xxxxxxxxxxx");

const sendSuccessNotification = (userEmail) => {
    const msg = {
        to: userEmail,
        from: 'techyinfo05@gmail.com',
        subject: 'Booking Confirmation',
        text: 'Thank you for your booking!'
    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error);
        });
}
module.exports = {
    sendSuccessNotification
};
