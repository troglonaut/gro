var app = angular.module('gro');
app.controller('plantChoiceCtrl', function($scope, $stateParams, $modal, $mdToast, $animate, authService, plantService, googleCalendarService){
	$scope.user = authService.getUser($stateParams.userId);
  var user = $scope.user;
  var user1 = $scope.user;
  var uid = $scope.user.$id;
  console.log(user)
  console.log($scope.user)
  
  $scope.veggies = plantService.getVeggies();
  $scope.subview = $stateParams.subview;

  $scope.pickedArr = [];
  console.log($scope.pickedArr)

  $scope.userVeggies = plantService.getUserVeggies(uid)

  $scope.openModal = function(veggie){
    var modal = $modal.open({
      templateUrl: 'guts/plantChoice/modal/modal.html',
      controller: 'modalCtrl',
      size: 'lg',
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
        // plantService.vegGrid(user, vegUserData)
        // console.log($scope.pickedArr)
    });
  }

  $scope.openToast = function(){
    $mdToast.show({
      controller: 'toastCtrl',
      templateUrl: 'guts/plantChoice/toast/toastTmpl.html',
      hideDelay: 6000,
      position: "top right"
    });
  }


  var newCal = {
    summary: 'gro Planting Dates'
  }

  $scope.calMagic = function(){
    googleCalendarService.getEventInfo($scope.user)
      .then(function(dataArr){
        var allEvents = dataArr
        googleCalendarService.authCal()
          .then(function(data){
            var token = data.access_token;
            googleCalendarService.makeCalendar(token, newCal)
              .then(function(data){
                var calId = data.data.id;
                console.log("Calendar ID:", calId)
                googleCalendarService.addEvents(allEvents, calId, token)
              })
          })
      })
  }
})