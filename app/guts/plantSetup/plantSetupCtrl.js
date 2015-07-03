var app = angular.module('gro');
app.controller('plantSetupCtrl', function($scope, plantChildService){
	
	$scope.veg    = {}

	$scope.imgUrl = ''

	$scope.namey  = $scope.veg.name


	$scope.createVeg = function(){
		plantChildService.newVeg($scope.veg);
	}

	$scope.addUrl = function(){
		plantChildService.addUrl($scope.namey, $scope.imgUrl)
	}

	$scope.addInfo = function(){
		plantChildService.addInfo($scope.veg)
	}

// $cleanUp = function() {
// 	if !($scope.veg.zone) {
// 		$
// 	}
// }
})

