const express = require('express');
const app = express();
const n1 = require('./src/ejercicios/nivel_1');
const n2_1 = require('./src/ejercicios/nivel_2.1');
const n2_2 = require('./src/ejercicios/nivel_2.2');
const n3 = require('./src/ejercicios/nivel_3');

//nivel 1
app.use(n1);

//nivel 2 ejercicio 1
app.use(n2_1);

//nivel 2 ejercicio 2
app.use(n2_2);

//nivel 3
app.use(n3);

//Run server
app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});
