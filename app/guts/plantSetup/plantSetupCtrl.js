var app = angular.module('gro');
app.controller('plantSetupCtrl', function($scope, plantChildService){
	$scope.createVeg = function(){
		plantChildService.newVeg();
	}
})
