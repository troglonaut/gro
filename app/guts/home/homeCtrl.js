var app = angular.module('gro');
app.controller('homeCtrl', function($scope, $location, authService){
	
	var loginCallback = function(user){
    user.uid = user.uid.replace('google:', '');
    $location.path('/register/' + user.uid);
    $scope.$apply();
    // $location.path('/dashboard/' + user.uid)
  };

	$scope.logIn = function(){
		return authService.login(loginCallback)
		// $location.path('/dashboard/' + user.uid)
	}

	$scope.logOut = function(){
		authService.logOut()
	}
});