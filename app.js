var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model');
var db = 'mongodb://localhost:27017/mongooseEssentials';
var port = 8080;

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.send('hey there');
});

app.get('/books', function(req, res) {
  Book.find({})
  .exec(function(err, books) {
    if (err) {
      res.send('An error has occurred');
    }
    else {
      res.json(books);
    }
  });
});

app.get('/book/:id', function(req, res) {
  Book.findOne({
    "_id": req.params.id
  })
  .exec(function(err, book) {
    if (err) {
      res.send('An error has occured');
    }
    else {
      res.json(book);
    }
  });
});

app.post('/book', function(req, res) {
  var newBook = new Book();
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;
  newBook.save(function(err, book) {
    if (err) {
      res.send('An error occured saving the book');
    }
    else {
      res.json(book);
    }
  });
});

app.post('/book2', function(req, res) {
  Book.create(req.body, function(err, book) {
    if (err) {
      res.send('An error occured saving the book');
    }
    else {
      res.json(book);
    }
  });
});

app.put('/book/:id', function(req, res) {
  Book.findOneAndUpdate({
    "_id": req.params.id
  },
  { "$set": { author: req.body.author } },
  {
    "upsert": true,
    "new": true
  },
  function (err, book) {
    if (err) {
      res.send('An error occured updating the book');
    }
    else {
      res.json(book);
    }
  });
});

app.delete('/book/:id', function(req, res) {
  Book.findOneAndRemove({
    "_id": req.params.id
  }, function(err, book) {
    if (err) {
      res.send('An error occured deleting the book');
    }
    else {
      res.json(book);
    }
  });
});

app.listen(port, function(err) {
  if (err) {
    throw new Error('Server was not started successfully.');
  }
  else {
    console.log('Server started successfully');
  }
});