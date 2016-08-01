var fs = require('fs');

/*  per default, buffer-size the stream fills, is 64 KB;
    size can be changed via highWaterMark */
var readable = fs.createReadStream(__dirname + '/greet.txt', {
  encoding: 'utf8',
  highWaterMark: 32 * 1024
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//  data event fires, when buffer filled by stream is full
readable.on('data', function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
});