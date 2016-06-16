function greetings() {

    function private() {
        console.log("Private Greeting");    
    }

    this.public =  function() {
        console.log("Public Greeting");
        private();
    };

}

// export the Object function itself
module.exports = some_object;

// export an instance of the object
//var abc = new some_object();
// module.exports = abc;