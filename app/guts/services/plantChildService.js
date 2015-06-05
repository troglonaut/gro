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
	// var veggieRef = new Firebase(vegUrl + '/' + veggie)
	// var plantsRef = new Firebase(plantsUrl);
	var vegRef = new Firebase(vegUrl);
	// var floRef = new Firebase(floUrl);

	//function to create vegetable objects
	this.newVeg = function(veg) {
		var veggieRef = new Firebase(vegUrl + '/' + veg.name)
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('directSow').set({beginDate: veg.dsbd, endDate: veg.dsed})
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('directSow2').set({beginDate: veg.dsbd2, endDate: veg.dsed2})
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('indoorSow').set({beginDate: veg.isbd, endDate: veg.ised})
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('indoorSow2').set({beginDate: veg.isbd2, endDate: veg.ised2})
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('transplant').set({beginDate: veg.transBD, endDate: veg.transED})
		veggieRef.child('zoneDates').child('zone-' + veg.zone).child('transplant2').set({beginDate: veg.transBD2, endDate: veg.transED2})
		veggieRef.child('name').set(veg.name)
		veggieRef.child('sciName').set(veg.sciName)
		veggieRef.child('yieldTime').set('')
		veggieRef.child('link').set('')
	}

})