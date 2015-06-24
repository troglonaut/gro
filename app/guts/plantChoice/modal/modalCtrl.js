var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, $stateParams, veggie, user, plantService, authService){
	console.log(veggie)

	$scope.user = user;
	$scope.veggie = veggie;
	console.log($scope.veggie)
	$scope.imagePath = $scope.veggie.imgUrl
	console.log($scope.imagePath)

	$scope.saveDataArr = [];

	// For use with wikipedia stuff
	$scope.wordStuff = plantService.wikiExtract($scope.veggie.name)
  console.log($scope.wordStuff);

	// $scope.wikipediaExtract = function(){
	// 	plantService.extract(veggie)
	// 		.then(function(data){
	// 			console.log(data)
	// 		})
	// }
	// console.log($scope.wikipediaExtract)

	$scope.setDates = function(info){
		$scope.sowDateInfo = info;
	}

	$scope.addSowDates = function(){
    $modalInstance.close({
			name: veggie.name,
			sowInfo: $scope.saveDataArr,
			imgPath: $scope.veggie.imgUrl,
			localImg: $scope.veggie.localImg
		});
	};

  $scope.cancel = function(){
    $modalInstance.dismiss(false);
  };

  $scope.conArr = function(){
  	console.log($scope.saveDataArr)
  }
})