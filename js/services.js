// SERVICES

myWthr.service("citySvc", function() {
	this.city = "Munich, Germany";
})


// Insert your API key in forecastSvc
myWthr.service("forecastSvc", ["$resource", function($resource) {
	this.apiKey = ""; // Put your API Key here.
	this.apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?appid=" + this.apiKey;
	
	this.getWeather = function(city, days) {
		var weatherApi = $resource(this.apiUrl, {
			callback: "JSON_CALLBACK"
		}, {
			get: { method: "JSONP" }
		});
		
		return weatherApi.get({
			q: city,
			cnt: days
		});
	};
	
}]);