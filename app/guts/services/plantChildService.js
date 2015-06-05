var app = angular.module('gro');
app.service('plantChildService', function($firebaseObject){

	//reference to Firebase endpoints.
	var fbUrl = "https://gro.firebaseio.com";
	var plantsUrl = fbUrl + '/plants';
	var vegUrl = plantsUrl + '/veggies';
		//flower URL
	var floUrl = plantsUrl + '/flowers';

	//Creates an object using the Firebase Constructor with our endpoint passed in
	var fbRef = new Firebase(fbUrl)
	// var plantsRef = new Firebase(plantsUrl);
	// // var vegRef = new Firebase(vegUrl);
	// var floRef = new Firebase(floUrl);

	//function to create vegetable objects
	this.newVeg = function() {
		// vegRef.child('broccoli').child('zoneDates').child('directSow')
		// vegRef.child('broccoli').child('zoneDates').child('indoorSow')
		// vegRef.child('broccoli').child('zoneDates').child('transplant')
		// vegRef.child('broccoli').child('name')
		// vegRef.child('broccoli').child('sciName')
		fbRef.child('plants').set({
			name: 'broccoli'
		})
	}


})