var app = angular.module('gro');
app.controller('registerCtrl', function($scope, $stateParams, $state, $location, authService){
	
	$scope.user = authService.getUser($stateParams.userId)

	$scope.registerUser = function(){
		authService.getZone($scope.user.zip)
		.then(function(data){
			$scope.user.zoneData = data
			console.log($scope.user.zoneData)
		}).then(function(){
			$scope.user.$save()
		}).then(function(){
			$state.go('plantChoice.subview', {userId: $scope.user.uid.replace('google:', '')});
		})
	}

})