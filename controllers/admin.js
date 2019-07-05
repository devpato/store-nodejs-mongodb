const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description
  });

  product
    .save()
    .then(() => {
      console.log('CREATED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(errr);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
};

exports.getProducts = (req, res, next) => {};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
};
