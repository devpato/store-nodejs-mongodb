const path = require('path');
const moongose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5d1fcc9b0ae04918c4e64479')
    .then(user => {
      req.user = user;
      console.log(req.user);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

moongose
  .connect(
    'mongodb+srv://admin:admin@shop-heg91.mongodb.net/shop?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    User.findOne().then(user => {
      if (!user) {
        console.log('NEW USER CREATED');
        const user = new User({
          name: 'Pato',
          email: 'pato@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    console.log('CONNECTED TO DB');
    app.listen(3000);
    console.log('LISTENING PORT 3000');
  })
  .catch(err => {
    console.log(err);
  });

//222,221,218
