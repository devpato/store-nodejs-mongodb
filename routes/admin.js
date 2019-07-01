const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.use('/add-product', (req, res, next) => {
  res.send(
    `
      <form action="/product" method="POST">
          <input type="text" name="title" />
          <button type="submit">Add</button>
      </form>
      `
  );
});

ROUTER.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = ROUTER;
