var app = angular.module('gro');
app.directive('dirPlantChoice', function(){
	return {
		restrict: '',
		link: '',
		templateUrl: 'guts/directives/dirPlantChoice.html',
		scope: {
			dateObj: '=',
			sowType: '=',
			saveDataArr: '='
		},
		// link: function(scope, element, attrs){
			
		// 	element.on('click', function(){
		// 		if(scope.showCal === true){
		// 			scope.saveDataArr.push(scope.saveData)
		// 		}
		// 		// scope.apply();
		// 		// console.log(scope.saveDataArr)
		// 	})
		// },
		controller: function($scope){

			$scope.sowType = formatSowType($scope.sowType);
			var beginDate = $scope.dateObj.beginDate;
			var endDate = $scope.dateObj.endDate;
			$scope.minDate = formatDate(beginDate);
			$scope.maxDate = formatDate(endDate);
			var minDate = $scope.minDate;
			$scope.dt = new Date(minDate);
			
			$scope.dtLog = function(){
				console.log($scope.dt);
			}

			$scope.onChange = function(){				
				if($scope.showCal === true){
					$scope.saveData = {
						sowType: $scope.sowType,
						sowDate: $scope.dt,
						timestamp: new Date().toISOString()
					}
					console.log($scope.saveData)
					$scope.saveDataArr.push($scope.saveData)
					console.log($scope.saveDataArr)
				}
			}

			// $scope.consoleDt = function(){
			// 	console.log(dt)
			// }
			
			// $scope.dateObj.pickDate = new Date(minDate);
			// console.log($scope.sowType.pickDate)
			
			// $scope.dt = new Date($scope.minDate);

			$scope.dateOptions = {
		    startingDay: 1,
		    // initDate: minDate
		  };
			
			// datepicker from docs
			$scope.open = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
		  };

		  $scope.showCal = false;
		  $scope.format = 'yyyy-MMMM-dd'			

			function formatSowType(string){
				if(string === "directSow"){
					return "Direct Sow";
				} else if (string === "directSow2"){
					return "Direct Sow 2";
				} else if (string === "indoorSow"){
					return "Indoor Sow";
				} else if (string === "indoorSow2"){
					return "Indoor Sow 2"
				} else if (string === "transplant"){
					return "Transplant"
				} else if (string === "transplant2"){
					return "Transplant 2"
				}
			}

			function formatDate(string){
				var d = new Date();
				var year = d.getFullYear().toString() + '-'
				var arr = string.split('')
				arr.splice(2, 0, "-")
				arr.unshift(year)
				var sowDate = arr.join('')
				return sowDate
			}
		}

	}
})