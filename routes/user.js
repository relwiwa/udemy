var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// all routes are relative to /user


router.post('/', function (req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // encrypt password; int indicates number of salting rounds
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    // no such user
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: { message: 'Invalid login credentials' }
      });
    }
    // wrong password
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: { message: 'Invalid login credentials' }
      });
    }
    // jwt consists of header | payload | verify signature
    var token = jwt.sign({user: user}, process.env.JWT_SECRET, {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    });


  })
});

module.exports = router;