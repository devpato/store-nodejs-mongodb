const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const APP = EXPRESS();
const ADMIN_ROUTES = require('./routes/admin');
const SHOPE_ROUTES = require('./routes/shop');

APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(ADMIN_ROUTES);
APP.use(SHOPE_ROUTES);

APP.listen(3000);
