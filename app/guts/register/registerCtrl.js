var app = angular.module('gro');
app.controller('registerCtrl', function($scope, $routeParams, authService){
	
	$scope.user = authService.getUser($routeParams.userId)
	console.log($scope.user)

	$scope.registerUser = function(){
		authService.getZone($scope.user.zip)
		.then(function(data){
			$scope.user.zoneData = data
			console.log($scope.user.zoneData)
		}).then(function(){
			$scope.user.$save()
		})
	}

	$scope.zoneClick = function(){
		authService.getZone($scope.user.zip);
	}

})