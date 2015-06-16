var app = angular.module('gro');
app.controller('registerCtrl', function($scope, $stateParams, $location, authService){
	
	$scope.user = authService.getUser($stateParams.userId)
	console.log($scope.user)

	$scope.registerUser = function(){
		authService.getZone($scope.user.zip)
		.then(function(data){
			$scope.user.zoneData = data
			console.log($scope.user.zoneData)
		}).then(function(){
			$scope.user.$save()
		}).then(function(){
			$location.path('/plantChoice/' + $scope.user.uid.replace('google:', ''));
		})
	}

})