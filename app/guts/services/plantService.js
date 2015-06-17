var app = angular.module('gro');
app.service('plantService', function($http, $q, $firebaseObject, $firebaseArray){

	var fbUrl = "https://gro.firebaseio.com";
	var plantsUrl = fbUrl + '/plants';
	var userUrl = fbUrl + '/users';
	var fbRef = new Firebase(fbUrl);

	var plantsRef = new Firebase(plantsUrl);

	this.getVeggies = function(){
		var veggiesUrl = plantsUrl + '/veggies';
		var veggiesRef = new Firebase(veggiesUrl);
		var veggiesObj = $firebaseObject(veggiesRef);
		return veggiesObj;
	}

	this.addSowDates = function(uid, veggieData){
		var userVegUrl = userUrl + "/" + uid;
		var userRef = new Firebase(userVegUrl);
  	var userObj = $firebaseObject(userRef);
  	for(var i = 0; i < veggieData.sowInfo.length; i++){
	  	veggieData.sowInfo[i].calEvent = {
	  		summary: "Plant your " + veggieData.name,
	  		start: {
	  			date: veggieData.sowInfo[i].sowDate
	  		},
	  		end: {
	  			date: veggieData.sowInfo[i].sowDate
	  		}
	  	}
  	}

		var vegUrl = plantsUrl + '/veggies/' + veggieData.name;
  	// try {
  	for(var i = 0; i < veggieData.sowInfo.length; i++){
  		fbRef.child('users').child(uid).child('user-veggies').child(veggieData.name).child(veggieData.sowInfo[i].sowType).set(veggieData.sowInfo[i]);
  	}
  	// }catch(error){
  	// 	console.log(error)
  	// }
  	
	}

})