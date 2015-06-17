var app = angular.module('gro');
app.controller('plantChoiceCtrl', function($scope, $stateParams, $modal, authService, plantService){
	
	$scope.user = authService.getUser($stateParams.userId)
	// console.log($scope.user)
  var uid = $scope.user.$id
  // console.log(uid)

  $scope.veggies = plantService.getVeggies();

  $scope.openModal = function(veggie){
    var modal = $modal.open({
      templateUrl: 'guts/plantChoice/modal/modal.html',
      controller: 'modalCtrl',
      size: 'lg',
      // backdropClass: 'custom-modal',
      resolve: {
        veggie: function(){
          return veggie;
        },
        user: function(){
          return $scope.user;
        }
      }
    });

    modal.result.then(function(vegUserData){
        // console.log(vegUserData)
        plantService.addSowDates(uid, vegUserData)
    });
  }

  $scope.cardToggle = function(){
  	$scope.cardShow = !($scope.cardShow);
  }

  $scope.subview = $stateParams.subview;

  $scope.calendarEvents = {}

})