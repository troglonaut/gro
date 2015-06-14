var app = angular.module('gro');
app.directive('dirPlantChoice', function(){
	return {
		templateUrl: 'guts/directives/dirPlantChoice.html',
		scope: {
			dateObj: '=',
			sowType: '='
		},
		controller: function($scope){
			$scope.sowType = formatSowType($scope.sowType)
			var beginDate = $scope.dateObj.beginDate;
			var endDate = $scope.dateObj.endDate;
			$scope.minDate = formatDate(beginDate);
			$scope.maxDate = formatDate(endDate);
			$scope.dt = new Date($scope.minDate);

			$scope.dateOptions = {
		    startingDay: 1,
		  };
		  console.log($scope.dateOptions)
			
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