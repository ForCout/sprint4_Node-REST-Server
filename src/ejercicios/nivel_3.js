const express = require('express');
const app = express();
const multer = require('multer');
const controller = require('../controller/controllerfile');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/public/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}- ${Date.now()}`);
  },
});

app.post('/upload', (req, res) => {
  const upload = multer({
    storage: storage,
    fileFilter: controller,
  }).single('file');

  upload(req, res, (err) => {
    if (req.fileValidationError) {
      return res
        .status(200)
        .json({ message: 'Formato incorrecto', file: req.fileValidationError });
    } else if (!req.file) {
      return res
        .status(200)
        .json({ message: 'Seleccione un archivo para subir' });
    } else if (err instanceof multer.MulterError) {
      return res.status(400).json(err.message);
    } else if (err) {
      return res.status(400).json(err.message);
    }

    res
      .status(200)
      .json({ message: `Su imagen se ha subido corectamente`, file: req.file });
  });
});

module.exports = app;
