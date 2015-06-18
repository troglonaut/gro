var app = angular.module('gro');
app.controller('homeCtrl', function($scope, $state, authService){
	
	var loginCallback = function(user){
    user.uid = user.uid.replace('google:', '');
    $state.go('register', {userId: user.uid})
    $scope.$apply();
  };

	$scope.logIn = function(){
		return authService.login(loginCallback)
	}

	$scope.logOut = function(){
		authService.logOut()
	}
});