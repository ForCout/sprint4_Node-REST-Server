const url = require('url');
const router = require('express').Router();

router.get('/user', (req, res) => {
  const person = {
    name: 'Moncho',
    age: 46,
    url: req.get('host'),
  };
  res.json({
    user: person,
  });
});

module.exports = router;
