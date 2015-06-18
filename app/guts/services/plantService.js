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

  	// Creates Google Calendar event
  	for(var i = 0; i < veggieData.sowInfo.length; i++){
	  	veggieData.sowInfo[i].calEvent = {
	  		summary: "Plant  " + veggieData.displayName + "(" + veggieData.sowInfo[i].sowType + ")",
	  		description: "It's time to plant your " + veggieData.name + "! Hooray!  Make sure it hasn't dropped below freezing tempurature in your area recently.",
	  		start: {
	  			date: veggieData.sowInfo[i].googleDate
	  		},
	  		end: {
	  			date: veggieData.sowInfo[i].googleDate
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