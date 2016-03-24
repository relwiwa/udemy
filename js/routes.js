// ROUTING

myWthr.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "HomeCtrl"
	})
	.when("/forecast", {
		templateUrl: "partials/forecast.html",
		controller: "ForecastCtrl"
	})
	.when("/forecast/:days", {
		templateUrl: "partials/forecast.html",
		controller: "ForecastCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
}]);