function Greetr() {
    this.greeting = 'Hello world 4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// export constructor function instead of instance of object
module.exports = Greetr;