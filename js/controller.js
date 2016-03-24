// CONTROLLERS

// HomeCtrl

myWthr.controller("HomeCtrl", ["$scope", "$location", "citySvc", function($scope, $location, citySvc) {
	
	$scope.city = citySvc.city;
	
	$scope.$watch("city", function() {
		citySvc.city = $scope.city;
	});
	
	$scope.submit = function() {
		$location.path("/forecast");
	}
	
}]);

// ForecastCtrl

myWthr.controller("ForecastCtrl", ["$scope", "$routeParams", "citySvc", "forecastSvc", function($scope, $routeParams, citySvc, forecastSvc) {
	
	$scope.city = citySvc.city;
	$scope.days = $routeParams.days || "2";																 
	
	$scope.weatherResult = forecastSvc.getWeather($scope.city, $scope.days);
	
	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}
	
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}

	
}]);