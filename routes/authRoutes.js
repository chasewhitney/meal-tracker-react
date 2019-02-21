const passport = require('passport');
const User = require('../models/User');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/current_user', (req, res) => {
    const { _id } = req.user
    console.log('request for user, sending:', req.user);
    User.findById({_id}).populate('favorites').then(user => {
      res.send(user);
    });

  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
