const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());
app.use(express.static('public'));
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html")
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});




