const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');

const APP = EXPRESS();

const ADMIN_ROUTES = require('./routes/admin');
const SHOP_ROUTES = require('./routes/shop');

APP.use(BODY_PARSER.urlencoded({ extended: false }));

APP.use('/admin', ADMIN_ROUTES);
APP.use(SHOP_ROUTES);

APP.use((req, res, next) => {
  console.log('page not found');
  res.status(404).send('<h1>Page not Foudn</h1>');
});

APP.listen(4000);
