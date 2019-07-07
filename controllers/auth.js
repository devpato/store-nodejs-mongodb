exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req
  //     .get('Cookie')
  //     .split(';')
  //     .pop()
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: res.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.session.isLoggedIn = true;
  res.redirect('/');
};
