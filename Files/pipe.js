var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

/*  readable sets up listening for data event of readable
    and writes data to writable */
readable.pipe(writable);

// creates a transform stream
var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// readable gets gzipped, then gzipped file gets written to compressed
readable.pipe(gzip).pipe(compressed);