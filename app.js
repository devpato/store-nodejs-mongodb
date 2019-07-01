const HTTP = require('http');
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const APP = EXPRESS();

APP.use(BODY_PARSER.urlencoded({ extended: false }));

APP.use('/', (req, res, next) => {
  res.send('<h1>Test</h1>');
});

APP.use('/add-product', (req, res, next) => {
  res.send(
    `
    <form action="/product" method="POST">
        <input type="text" name="title" />
        <button type="submit">Add</button>
    </form>
    `
  );
});

APP.post('/product', (req, res, next) => {
  res.redirect('/');
});

const SERVER = HTTP.createServer(APP);
SERVER.listen(3000);
