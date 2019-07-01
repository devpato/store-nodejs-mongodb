const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const PATH = require('path');

const APP = EXPRESS();

const ADMIN_ROUTES = require('./routes/admin');
const SHOP_ROUTES = require('./routes/shop');

APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

APP.use('/admin', ADMIN_ROUTES);
APP.use(SHOP_ROUTES);

APP.use((req, res, next) => {
  console.log('page not found');
  res.status(404).sendFile(PATH.join(__dirname, 'views', '404.html'));
});

APP.listen(3000);
