var app = angular.module('gro');
app.controller('plantChoiceCtrl', function($scope, $stateParams, $modal, authService, plantService, googleCalendarService){
	$scope.user = authService.getUser($stateParams.userId);
  var user = $scope.user;
  var user1 = $scope.user;
  var uid = $scope.user.$id;
  console.log(user)
  
  $scope.veggies = plantService.getVeggies();
  $scope.subview = $stateParams.subview;

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
        plantService.addSowDates(user, vegUserData)
    });
  }

  $scope.cardToggle = function(){
  	$scope.cardShow = !($scope.cardShow);
  }

  var newCal = {
    summary: 'gro Planting Dates'
  }

  console.log(newCal)

  var calEvents = $scope.user.calendar

  console.log(calEvents)

  $scope.calMagic = function(){
    googleCalendarService.makeCalendar(newCal, $scope.user)

    // KEEP THIS STUFF!!!!!
    // googleCalendarService.getEventInfo($scope.user)
    //   .then(function(data){
    //     console.log(data)
    //   })
  }
})