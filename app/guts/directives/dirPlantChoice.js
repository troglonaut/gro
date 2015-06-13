var app = angular.module('gro');
app.directive('dirPlantChoice', function(){
	return {
		templateUrl: 'guts/directives/dirPlantChoice.html',
		scope: {
			dateObj: '=',
			sowType: '='
		},
		controller: function($scope){
			// console.log($scope.dateObj, $scope.sowType)
			$scope.sowType = formatSowType($scope.sowType)
			var beginDate = $scope.dateObj.beginDate;
			var endDate = $scope.dateObj.endDate;
			$scope.minDate = formatDate(beginDate);
			$scope.maxDate = formatDate(endDate);
			console.log($scope.minDate)
			console.log($scope.maxDate)




			// WORK ON THIS!!!
			function formatSowType(string){
				if(string.indexOf("directSow2") !== -1){
					return "Direct Sow 2";
				} else if(string.indexOf("directSow") !== -1){
					return "Direct Sow";
				} else if(string.indexOf("indoorSow") !== -1){
					return "Indoor Sow";
				} else if(string.indexOf("indoorSow2") !== -1){
					return "Indoor Sow 2"
				} else if(string.indexOf("transplant") !== -1){
					return "Transplant";
				}
			}

			function formatDate(string){
				var d = new Date();
				var year = d.getFullYear();
				var yearStr = year.toString();

				var arr = string.split('')
				arr.splice(2, 0, "/")
				arr.push('/')
				arr.push(yearStr)
				var sowDate = arr.join('')
				console.log(sowDate)
				return sowDate
			}
		}

	}
})