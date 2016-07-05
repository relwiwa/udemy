(function() {
	angular.module("app.forecast")
	.controller("Forecast", ["$scope", "$routeParams", "weatherSvc", function($scope, $routeParams, weatherSvc) {
		$scope.forecast = null;
		
		$scope.getTime = getTime;
		
		if ($routeParams.id !== undefined) {
			getForecast($routeParams.id);
		}
		
		function getForecast(id) {
			weatherSvc.getForecast(id)
			.then(
				function success(response) {
					$scope.forecast = response.data;
					console.log($scope.forecast);
				},
				function error(error) {
					console.log("error loading forecast data: ", error);
				}
			);
		}
		
		function getTime(date) {
			return new Date(date * 1000);			
		}

	}]);
})();