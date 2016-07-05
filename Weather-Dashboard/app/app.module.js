(function() {
	var name = "app"
	var requires = [
		"ngRoute",
		"app.shell",
		"app.search",
		"app.weather",
		"app.forecast",
		"app.component",
		"app.data"
	];
	
	angular.module(name, requires);
	
	// Because ng-view is defined in a sub-module that is included
	// via ng-include, it's necessary to call $route.reload()
	// https://github.com/angular/angular.js/issues/1213
	angular.module("app")
	.run(["$route", function($route) {
		$route.reload();
	}]);
			
})();