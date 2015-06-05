var app = angular.module('gro');
app.controller('plantSetupCtrl', function($scope, plantChildService){
	
	$scope.veg = {
		zone: '',
		name: '',
		dsbd: '',
		dsed: '',
		dsbd2: '',
		dsed2: '',
		isbd: '',
		ised: '',
		isbd2: '',
		ised2: '',
		transBD: '',
		transED: '',
		transBD2: '',
		transED2: ''
	}

	$scope.createVeg = function(){
		plantChildService.newVeg($scope.veg);
	}
})
