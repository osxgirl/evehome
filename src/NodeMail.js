const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'osxgirl@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
  from: 'osxgirl@gmail.com', // sender address
  to: 'osxgirl@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

export default nodemailer;
