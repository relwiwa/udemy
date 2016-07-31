var buf = new Buffer('Hello', 'utf8');

// hexadecimal output of binary data
console.log(buf);

// conversion back to string
console.log(buf.toString());

// json object output with unicode charcodes
console.log(buf.toJSON());

/*  Only the first five characters are stored due to fixed
    size of Buffer; original content gets overwritten */
buf.write('123456789');
console.log(buf.toString());

// Array-like syntax to access specific buffer elements
console.log(buf[2]);