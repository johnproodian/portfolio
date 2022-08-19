const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// instantiate express app
const app = express(); 

async function mainMail(name, email, subject, message) {
// create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            type: "OAUTH2",
            user: process.env.GMAIL_USER,
            pass: process.env.PASSWORD
        }
    });
    const mailOption = {
        from: process.env.GMAIL_USER,
        to: process.env.EMAIL,
        subject: subject,
        html: `You got a message from
        Email  ${email}
        Name: ${name}
        Subject: ${subject}
        Message: ${message}`,
    };
    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message sent successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
}

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html")
});

app.get("/send", (req, res) => {
    res.render(contact.html);
});

app.post("/send", (req, res, next) => {
    const { email, subject, message } = req.body;
    try {
        mainMail(email, subject, message);

        res.send("Message successfully sent!");
    } catch (error) {
        res.send("Message cound not be sent");
    }
})

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
