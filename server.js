const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
// const multiparty = require('multiparty');
const dotenv = require("dotenv");
dotenv.config();
// const { SMTPClient } = require('emailjs');

// const client = new SMTPClient({
    
// })

// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground"
// )

// oauth2Client.setCredentials({ 
//     refresh_token:process.env.Refresh_Token 
// });
// const accessToken = oauth2Client.getAccessToken();

// instantiate express app
const app = express(); 
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());
app.use(express.static('public'));
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html")
});


// app.use(express.static(__dirname + '/public'));


// async function mainMail(name, email, subject, message) {
// // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: true,
//         auth: {
//             type: "OAUTH2",
//             user: process.env.GMAIL_USER,
//             pass: process.env.PASSWORD
//         }
//     });
//     const mailOption = {
//         from: process.env.GMAIL_USER,
//         to: process.env.EMAIL,
//         subject: subject,
//         html: `You got a message from
//         Email  ${email}
//         Name: ${name}
//         Subject: ${subject}
//         Message: ${message}`,
//     };
//     try {
//         await transporter.sendMail(mailOption);
//         return Promise.resolve("Message sent successfully!");
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }



// app.get("/send", (req, res) => {
//     res.render(contact.html);
// });

// app.post("/send", (req, res, next) => {
//     const { email, subject, message } = req.body;
//     try {
//         mainMail(email, subject, message);

//         res.send("Message successfully sent!");
//     } catch (error) {
//         res.send("Message cound not be sent");
//     }
// })


// app.post('/send', (req, res) => {
//     const output=`
//     <p>You have a new contact request</p>
//     <img class="email" src="cid:email" alt="email-image">
//     <h3>Contact details</h3>
//     <ul>
//         <li>FirstName: ${req.body.name}</li>
//         <li>Email: ${req.body.email}</li>
//         <li>Subject: ${req.body.subject}</li>
//         <li>Message: ${req.body.message}</li>
//     </ul>`

//     const smtpTrans = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             type: "OAuth2",
//             user: process.env.CLIENT_ID,
//             clientSecret:process.env.CLIENT_SECRET,
//             refreshToken:process.env.REFRESH_TOKEN,
//             accessToken:accessToken
//         }
//     });

//     const mailOpts = {
//         from:process.env.GMAIL_USER,
//         to:process.env.RECIPIENT,
//         subject:'New message from Nodemailer-contact-form',
//         html:output,
//         attachments: [{
//             filename: 'email.jpg',
//             path:__dirname + '/public/images/jpg', cid: 'email' // same cid value as in the html img src
//         }]
//     };

//     smtpTrans.sendMail(mailOpts, (error, res) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Message sent: " + res.message);
//             response.status(200).send(200);
//         }
//     });
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});




