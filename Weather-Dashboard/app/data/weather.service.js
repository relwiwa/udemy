(function() {
	angular.module("app.data")
	.factory("weatherSvc", ["$http", "$q", "weatherImgUrl", "weatherApiUrl", "countryFlagImgUrl", function($http, $q, weatherImgUrl, weatherApiUrl, countryFlagImgUrl) {
		// apikey necessary for call to openweathermap's api to work
		var apiKey = "";
		
		// define functionality on top
		// and details below for better overview
		return {
			find: findByLocation,
			getCurrent: getCurrentWeather,
			getForecast: getForecast,
			getWeatherImgUrl: getWeatherImgUrl,
			getCountryFlagImgUrl: getCountryFlagImgUrl,
			kelvinToDegree: kelvinToDegree,
			getTime: getTime
		}
						
		function findByLocation(location) {
			var url = weatherApiUrl + "/find?q=" + location + "&APPID=" + apiKey;
			
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
			var url = weatherApiUrl + "weather?id=" + id + "&APPID=" + apiKey;
			
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
			var url = weatherApiUrl + "forecast?id=" + id + "&APPID=" + apiKey;
			
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
		
		function getWeatherImgUrl(imgStr) {
			return weatherImgUrl + imgStr + ".png";
		}
		
		function getCountryFlagImgUrl(imgStr) {
			return countryFlagImgUrl + imgStr.toLowerCase() + ".png";
		}
		
		function kelvinToDegree(temp) {
			return temp - 273.15;
		}
		
		function getTime(date) {
			return new Date(date * 1000);			
		}
		
	}]);
})();