var app = angular.module('app', ["angular-unit-converter"]);
app.controller('MainCtrl', function($scope) {
	
	$scope.value = 25;
	$scope.convertFrom = "mm";
	
});
