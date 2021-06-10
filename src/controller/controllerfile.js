// Accept images only

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/.(jpg|jpeg|png|gif)$/i)) {
    req.fileValidationError = file;
    return cb(new Error, false);
  }

  cb(null, true);
};

module.exports = imageFilter;
