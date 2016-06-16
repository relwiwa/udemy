// put several modules into one module.exports
var english = require('./english');
var spanish = require('./spanish');

module.exports = {
    english: english,
    spanish: spanish
}