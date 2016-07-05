(function() {
	angular.module("app.weather")
	.controller("Weather", ["$scope", "$routeParams", "weatherSvc", function($scope, $routeParams, weatherSvc) {
		$scope.current = null;
		
		$scope.getTime = getTime;
		
		if ($routeParams.id !== undefined) {
			getCurrent($routeParams.id);
		}
		
		function getCurrent(id) {
			weatherSvc.getCurrent(id)
			.then(
				function success(response) {
					$scope.current = response.data;
					console.log($scope.current);
				},
				function error(error) {
					console.log("error loading current weather data: ", error);
				}
			);
		}
		
		function getTime(date) {
			return new Date(date * 1000);			
		}
		
	}]);
})();