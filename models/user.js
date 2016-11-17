var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
});

/*  Ensures uniqueness, as Mongoose by itself does not ensure it,
    in spite of the unique option */
schema.plugin(mongooseUniqueValidator);

/*  Mongoose will create collection based on 'User'
    collection's name will be in lower-case and pluralized */
module.exports = mongoose.model('User', schema);