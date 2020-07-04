const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'Login'
  });
};

exports.create = (req, res, next) => {
  // add the authentication logic here
   //local is the thing you want to authenticate using
   passport.authenticate('local', {
    successRedirect: '/reservations',
    successFlash: 'You were successfully logged in.',
    failureRedirect: '/login',
    failureFlash: 'Invalid Credentials'
    //passport.authenticate sends back a function defination
})(req, res, next);
};

exports.delete = (req, res) => {
  req.logout();
  req.flash('success', 'You were logged out successfully.');
  res.redirect('/');
};