let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user){
        res.render('auth/login',
        { 
          title: 'Login',
          messages: req.flash('loginMessage'),
          displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
      console.log(err)
      console.log(user)
      // server error
      if(err){
          return next(err);
      }
      // is there is user login error?
      if(!user){
          req.flash('loginMessage', 'Authentication Error');
          return res.json({success: false, msg: 'something is wrong'})
      }
      req.login(user, (err) => {
          // server error?
          if(err){
              return next(err);
          }
          const payload = {
              id: user._id,
              displayName: user.displayName,
              username: user.username,
              email: user.email
          }

          const authToken = jwt.sign(payload, DB.Secret, {
              expiresIn: 604800 // 1 week
          });

          return res.json({success: true, msg: 'User Logged in Successfully!', user: {
              id: user._id,
              displayName: user.displayName,
              username: user.username,
              email: user.email
          }, token: authToken});
      });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if the user is already logged in
  if(!req.user){
      res.render('auth/register',
      { 
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
  } else {
      return res.redirect('/');
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate user object
  console.log(req)
  let newUser = User({
      username: req.body.username,
      // password: req.body.password
      displayName: req.body.displayName,
      email: req.body.email
  })

  console.log(newUser)

  User.register(newUser, req.body.password, (err) => {
      if(err) {
          console.log('error: inserting new user');
          console.log(err);
          if(err.name == 'UserExistsError') {
              req.flash(
                  'registerMessage',
                  'Registration Error: User already exists'
              );
              console.log('error: inserting new user');
          }
          return res.render('auth/register',
          { 
              title: 'Register',
              messages: req.flash('registerMessage'),
              displayName: req.body ? req.body.displayName : ''
          });
      } else {
          // if no error exists, then registration is successful
          // authenticate user and redirect them

          
          // TODO - Getting Ready to convert to API
          //res.json({success: true, msg: 'User Registered Successfully!'});
          

          return passport.authenticate('local')(req, res, () => {
              return res.redirect('http://localhost:4200/login');
          })
      }
  })
};

/* perform logout */
module.exports.performLogout = (req, res, next) => {
  console.log('logout')
  req.logout();
  res.redirect('/');
};