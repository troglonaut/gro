var app = angular.module('gro');
app.controller('homeCtrl', function($scope, authService){
	$scope.logIn = function(){
		authService.login();
	}
});