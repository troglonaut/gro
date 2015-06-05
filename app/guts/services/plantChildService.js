var app = angular.module('gro');
app.service('plantChildService', function($firebaseObject){

	var veggie = 'broccoli'
	//reference to Firebase endpoints.
	var fbUrl = "https://gro.firebaseio.com";
	var plantsUrl = fbUrl + '/plants';
	var vegUrl = plantsUrl + '/veggies';
		//flower URL
	var floUrl = plantsUrl + '/flowers';

	//Creates an object using the Firebase Constructor with our endpoint passed in
	var fbRef = new Firebase(fbUrl)
	var veggieRef = new Firebase(vegUrl + '/' + veggie)
	// var plantsRef = new Firebase(plantsUrl);
	// // var vegRef = new Firebase(vegUrl);
	// var floRef = new Firebase(floUrl);

	//function to create vegetable objects
	this.newVeg = function() {
		veggieRef.child('zoneDates').child('directSow').set({beginDate: '', endDate: ''})
		veggieRef.child('zoneDates').child('directSow2').set({beginDate: '', endDate: ''})
		veggieRef.child('zoneDates').child('indoorSow').set({beginDate: '', endDate: ''})
		veggieRef.child('zoneDates').child('indoorSow2').set({beginDate: '', endDate: ''})
		veggieRef.child('zoneDates').child('transplant').set({beginDate: '', endDate: ''})
		veggieRef.child('zoneDates').child('transplant2').set({beginDate: '', endDate: ''})
		veggieRef.child('name').set('')
		veggieRef.child('sciName').set('')
		veggieRef.child('yieldTime').set('')
		veggieRef.child('link').set('')
	}

})