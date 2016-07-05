(function() {
	angular.module("app.data")
	.factory("weatherSvc", ["$http", "$q", function($http, $q) {
		// apikey necessary for call to openweathermap's api to work
		var apiKey = "";
		
		// define functionality on top
		// and details below for better overview
		return {
			find: findByLocation,
			getCurrent: getCurrentWeather,
			getForecast: getForecast
		}
						
		function findByLocation(location) {
			var url = "http://api.openweathermap.org/data/2.5/find?q=" + location + "&APPID=" + apiKey;
			
			var defer = $q.defer();
			
			$http.get(url)
			.then(
				function success(response) {
					defer.resolve(response);
				},
				function error(error) {
					defer.reject(error);
				}
			);
			
			return defer.promise;
		}
		
		function getCurrentWeather(id) {
			var url = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&APPID=" + apiKey;
			
			var defer = $q.defer();

			$http.get(url)
			.then(
				function success(response) {
					defer.resolve(response);
				},
				function error(error) {
					defer.reject(error);
				}
			);
			
			return defer.promise;
		}
		
		function getForecast(id) {
			var url = "http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&APPID=" + apiKey;
			
			var defer = $q.defer();

			$http.get(url)
			.then(
				function success(response) {
					defer.resolve(response);
				},
				function error(error) {
					defer.reject(error);
				}
			);
			
			return defer.promise;
		}
		
	}]);
})();