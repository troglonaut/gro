var app = angular.module('gro');
app.controller('calendarCtrl', function($scope, $stateParams, authService){
	$scope.user = authService.getUser($stateParams.userId);
	$scope.test = "hello?"

	console.log($scope.user)
})