function Greetr() {
    this.greeting = 'Hello world 3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// replace exports object with my own Greetr object
module.exports = new Greetr();