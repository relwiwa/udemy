(function() {
	angular.module("app.search")
	.controller("Search", ["$scope", "weatherSvc", function($scope, weatherSvc) {
		$scope.cities = null;
		
		$scope.$on("search", search);
		
		function search(evt, data) {
			weatherSvc.find(data.str)
			.then(
				function success(response) {
					$scope.cities = response.data.list;
					console.log($scope.cities);
				},
				function error(error) {
					console.log("error finding cities: ", error);
				}
			)
		}
	}]);
})();