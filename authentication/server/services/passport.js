const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
const passport = require('passport');

const config = require('../config');
const User = require('../models/user');

// Create local strategy

// link email to username
const localOptions = {
  usernameField: 'email',
};

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }

    // Call done with false if the email=user is incorrect
    if (!user) { return done(null, false); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      // Call done with false if the password is incorrect
      if (!isMatch) { return done(null, false); }
      // Call done with the user if the credentials are correct
      return done(null, user);
    });
  });
});

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// Create JWT strategy

// payload is JWT's sub and iat properties 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    // If it does, call 'done' with that user
    if (user) {
      done(null, user);
    }
    // Otherwise, call done without a user object
    else {
      done(null, false);
    }
  });

});

// Tell Passport to use this strategy

passport.use(jwtLogin);
passport.use(localLogin);
