const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.send({"message" : "Decades!"})
});

module.exports = app;