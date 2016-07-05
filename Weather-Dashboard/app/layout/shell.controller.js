(function() {
	angular.module("app.shell")
	.controller("Shell", ["$scope", "weatherSvc", function($scope, weatherSvc) {
		
		$scope.getTime = weatherSvc.getTime;
		$scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
		$scope.getCountryFlagImgUrl = weatherSvc.getCountryFlagImgUrl;
		$scope.kelvinToDegree = weatherSvc.kelvinToDegree;
		
	}]);
})();