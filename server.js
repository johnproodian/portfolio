const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// instantiate express app
const app = express();

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html")
});

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
