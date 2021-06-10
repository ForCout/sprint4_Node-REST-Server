const express = require('express');
const app = express();
const path = require('path');



app.get('/index', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../views/about.html'));
});


module.exports = app;