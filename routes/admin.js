const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.use('/add-product', (req, res, next) => {
  res.send(
    `
    <form action="/admin/add-product" method="POST">
        <input type="text" name="title">
        <button type="submit">Add Product</button>
    </form>
    `
  );
});

ROUTER.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = ROUTER;
