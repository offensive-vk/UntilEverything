const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const app = express();

// Passport.js configuration
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    // Here you should query your database for the user with the given email
    // For the sake of this example, we'll just use a hardcoded user
    const user = {
      id: 1,
      email: 'user@example.com',
      password: '$2b$10$CwTycCDCv06Vc1sJvu/Ti.fq5K3lGywGdFa.yTc7L/JKrKaO/g/6a' // This is a bcrypt hashed version of 'password'
    };

    // If the user doesn't exist, return an error
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }

    // If the password is incorrect, return an error
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    // If the email and password are correct, return the user
    return done(null, user);
  }
));

// Serialize and deserialize the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Here you should query your database for the user with the given id
  // For the sake of this example, we'll just use a hardcoded user
  const user = {
    id: 1,
    email: 'user@example.com',
    password: '$2b$10$CwTycCDCv06Vc1sJvu/Ti.fq5K3lGywGdFa.yTc7L/JKrKaO/g/6a' // This is a bcrypt hashed version of 'password'
  };

  done(null, user);
});

// Use Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

// Define a route for logging in
app.post('/login', passport.authenticate('local'), function(req, res) {
  res.json({ message: 'Logged in successfully.' });
});

// Define a route for logging out
app.get('/logout', function(req, res) {
  req.logout();
  res.json({ message: 'Logged out successfully.' });
});

// Define a route for checking if a user is logged in
app.get('/check-login', function(req, res) {
  if (req.isAuthenticated()) {
    res.json({ message: 'Logged in.' });
  } else {
    res.json({ message: 'Not logged in.' });
  }
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
