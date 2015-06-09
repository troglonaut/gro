var app = angular.module('gro');
app.controller('plantChoiceCtrl', function($scope, $stateParams, authService, plantService){
	
	//just an example from angular docs on checkboxes in angular.
	// $scope.vegCheck = {
 //       value1 : true,
 //       value2 : 'YES'
 //  }

  $scope.veggies = plantService.getVeggies();
  console.log($scope.veggies)

  $scope.subview = $stateParams.subview

  // $scope.veggie.checkbox = false;

})