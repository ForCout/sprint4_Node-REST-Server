const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', (__dirname, 'src/views'));

app.get('/index/hbs', (req, res) => {
  res.render('index', { titulo: 'document', mensaje: 'Primera página', direccion: 'Click aquí' });
});

app.get('/about/hbs', (req, res) => {
  res.render('about', { titulo: 'document', mensaje: 'Segunda página' });
});


module.exports = app;
