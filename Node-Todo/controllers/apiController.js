var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/api/todos/:uname', function(req, res) {
    Todos.find({
      username: req.params.uname
    }, function(err, todos) {
      if (err) {
        throw new Error('An error happened getting todos.');
      }
      res.send(todos);
    });
  });

  app.get('/api/todo/:id', function(req, res) {
    Todos.findById({
      _id: req.params.id
    }, function(err, todo) {
      if (err) {
        throw new Error('There was an error getting this todo');
      }
      res.send(todo);
    });
  });

  app.post('/api/todo', function(req, res) {
    // has id, so update
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, function(err, todo) {
        if (err) {
          throw new Error('Error updating todo');
        }
        res.send('Todo successfully updated');
      });    
    }
    // no id, so create new todo
    else {
      var newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });
      newTodo.save(function(err) {
        if (err) {
          throw new Error('Error creating new todo');
        }
        res.send('Todo successfully created');
      });
    }
  });

  app.delete('/api/todo', function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err) {
      if (err) {
        throw new Error('Error deleting todo');
      }
      res.send('Todo successfully deleted');
    });
  });

};