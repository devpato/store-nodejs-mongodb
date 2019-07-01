const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.use('/', (req, res, next) => {
  res.send('<h1>Test</h1>');
});

module.exports = ROUTER;
