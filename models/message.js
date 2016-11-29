var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

/*  Mongoose middleware gets called when message is removed
    It ensures that that message also gets removed from messages array in user */
schema.post('remove', function(message) {
  User.findById(message.user, function(err, user) {
    user.messages.pull(message);
    user.save();
  });
});

/*  Mongoose will create collection based on 'Message'
    collection's name will be in lower-case and pluralized */
module.exports = mongoose.model('Message', schema);