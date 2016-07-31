// buffer with 8 Byte == 64 bit
var buffer = new ArrayBuffer(8);

// array containing numbers, 32 bit each
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

// not working, as there's only space for two 32-bit numbers
view[2] = 25;
console.log(view);