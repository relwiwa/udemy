function  Emitter() {
	this.events = {};
}


// add listener for a certain type of event
Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

// execute listener functions for a certain event
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = Emitter;