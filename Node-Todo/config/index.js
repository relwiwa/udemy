//var configValues = require('./config.json');
var uname = process.env.NODE_TODO_UNAME;
var pwd = process.env.NODE_TODO_PWD;

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + uname + ':' + pwd + '@ds161315.mlab.com:61315/udemy-node-todo';
  }
};