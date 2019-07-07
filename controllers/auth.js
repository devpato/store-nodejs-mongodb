const User = require('../models/user.js');
exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req
  //     .get('Cookie')
  //     .split(';')
  //     .pop()
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5d1fcc9b0ae04918c4e64479')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      return req.session.save();
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
