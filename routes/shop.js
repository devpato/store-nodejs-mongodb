const EXPRESS = require('express');
const PATH = require('path');
const ROUTER = EXPRESS.Router();
const ROOT_DIR = require('../util/path');

ROUTER.use('/', (req, res, next) => {
  res.sendFile(PATH.join(ROOT_DIR, 'views', 'shop.html'));
});

module.exports = ROUTER;
