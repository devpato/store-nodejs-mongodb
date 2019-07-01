const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');

const ROOT_DIR = require('../util/path');

ROUTER.use('/add-product', (req, res, next) => {
  res.sendFile(PATH.join(ROOT_DIR, 'views', 'add-product.html'));
});

ROUTER.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = ROUTER;
