const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-hbs");
const  multer   = require ('multer') 
const upload = multer({ dest: './public/images' })

//nivel 1
const person = {
  name: "Moncho",
  age: 46,
};

app.get("/user", function (req, res) {
  res.json({
    user: person,
    urlRequest: req.url,
  });
});

//nive2 ejercicio 1

app.get("/pp", function (req, res) {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});
app.get("/p", function (req, res) {
  res.sendFile(path.resolve(__dirname, "views/about.html"));
});

//nive2 ejercicio 2

app.engine(
  "html",
  hbs.express4({
    partialsDir: __dirname + "/views",
  })
);

app.get("/index", function (req, res) {
  res.render("index.html");
});

app.get("/about", function (req, res) {
  res.render("about.html");
});



//nivel 3
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.get("/upload", function (req, res) {
  res.render("upload.html");
});


app.post("/upload",upload.single("imagen"),(req, res) => {
   
    let extension = /(.jpg|.jpeg|.png|.gif)$/i;
  if (!extension.exec(req.file.originalname)) {
    return res.status(400).send('El fichero no tiene la extension adecuada')
    
     
    } else {
      upload.single("imagen")
      console.log(req.file);
      res.send('Check image')
  }
  
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
