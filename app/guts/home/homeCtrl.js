var app = angular.module('gro');
app.controller('homeCtrl', function($scope, authService){
	$scope.logIn = function(){
		authService.login();
		$location.path('/register')
		$location.path('/dashboard/' + user.uid)
	}
});