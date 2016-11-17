var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

/*  Mongoose will create collection based on 'Message'
    collection's name will be in lower-case and pluralized */
module.exports = mongoose.model('Message', schema);