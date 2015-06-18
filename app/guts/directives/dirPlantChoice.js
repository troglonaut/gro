var app = angular.module('gro');
app.directive('dirPlantChoice', function(){
	return {
		templateUrl: 'guts/directives/dirPlantChoice.html',
		scope: {
			dateObj: '=',
			sowType: '=',
			saveDataArr: '=',
			setInfo: '&'
		},
		controller: function($scope){
			var sowType = $scope.sowType;
			$scope.setInfo = ({sowType: $scope.saveData})

			$scope.sowType = formatSowType($scope.sowType);
			var beginDate = $scope.dateObj.beginDate;
			var endDate = $scope.dateObj.endDate;
			$scope.minDate = formatDate(beginDate);
			$scope.maxDate = formatDate(endDate);
			var minDate = $scope.minDate;
			$scope.dt = new Date(minDate);
			console.log($scope.minDate, $scope.maxDate)
			
			$scope.dtLog = function(){
				console.log($scope.dt);
			}

			$scope.onChange = function(){				
				if($scope.showCal === true){
					var forGoogDate = $scope.dt.toISOString()
					var forGoogDate2 = forGoogDate.split('');
					var calArray = [];
					for(var i = 0; i < forGoogDate2.length; i++){
						if(forGoogDate2[i] === 'T'){
							break
						} else {
							calArray.push(forGoogDate2[i])
						}
					}
					$scope.saveData = {
						sowType: $scope.sowType,
						sowDate: $scope.dt.toDateString(),
						timestamp: new Date().toISOString(),
						googleDate: calArray.join('')
					}
					console.log($scope.saveData)
					$scope.saveDataArr.push($scope.saveData)
					console.log($scope.saveDataArr)
				}
			}

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
				var year = d.getFullYear().toString() + '-';
				var arr = string.split('');
				arr.splice(2, 0, "-");
				arr.unshift(year);
				var sowDate = arr.join('');
				return sowDate;
			}
		}
	}
})