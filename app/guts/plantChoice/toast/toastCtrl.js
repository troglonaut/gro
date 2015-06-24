var app = angular.module('gro');
app.controller('toastCtrl', function($scope, $mdToast, $stateParams, authService){
	$scope.user = authService.getUser($stateParams.userId)
	console.log($scope.user)

	$scope.closeToast = function() {
    $mdToast.hide();
  };

})