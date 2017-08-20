const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');

const config = require('../config');
const User = require('../models/user');

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
