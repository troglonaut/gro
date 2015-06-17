var app = angular.module('gro');
app.controller('homeCtrl', function($scope, $location, authService){
	
	var loginCallback = function(user){
    user.uid = user.uid.replace('google:', '');
    $location.path('/register/' + user.uid);
    $scope.$apply();
    // $location.path('/dashboard/' + user.uid)
  };

  var loginCallback2 = function(user){
  	user.uid = user.uid.replace('google:', '');
  	$location.path('/plantChoice/' + user.uid + '/subview')
  }

	$scope.logIn = function(){
		return authService.login(loginCallback, loginCallback2)
		// $location.path('/dashboard/' + user.uid)
	}

	$scope.logOut = function(){
		authService.logOut()
	}
});