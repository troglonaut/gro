var app = angular.module('gro');
app.service('plantChildService', function($firebaseObject){

	//reference to Firebase endpoints.
	var fbUrl     = "https://gro.firebaseio.com";
	var plantsUrl = fbUrl + '/plants';
	var vegUrl    = plantsUrl + '/flowers';

	//Creates an object using the Firebase Constructor with our endpoint passed in
	var fbRef  = new Firebase(fbUrl)
	var vegRef = new Firebase(vegUrl);

	//function to create vegetable objects
	this.newVeg = function(veg) {
		var veggieRef = new Firebase(vegUrl + '/' + veg.name)
		console.log(veg)
		if(veg.dsbd)        { veggieRef.child('zoneDates').child(veg.zone).child('directSow').set(   { beginDate: veg.dsbd, endDate: veg.dsed})}
		if(veg.dsbd2)       { veggieRef.child('zoneDates').child(veg.zone).child('directSow2').set(  { beginDate: veg.dsbd2, endDate: veg.dsed2})}
		if(veg.isbd)        { veggieRef.child('zoneDates').child(veg.zone).child('indoorSow').set(   { beginDate: veg.isbd, endDate: veg.ised})}
		if(veg.isbd2)       { veggieRef.child('zoneDates').child(veg.zone).child('indoorSow2').set(  { beginDate: veg.isbd2, endDate: veg.ised2})}
		if(veg.transBD)     { veggieRef.child('zoneDates').child(veg.zone).child('transplant').set(  { beginDate: veg.transBD, endDate: veg.transED})}
		if(veg.transBD2)    { veggieRef.child('zoneDates').child(veg.zone).child('transplant2').set( { beginDate: veg.transBD2, endDate: veg.transED2})}
		if(veg.localImg)    { veggieRef.child('localImg').set(veg.localImg)}
		if(veg.infoLink)    { veggieRef.child('infoLink').set(veg.infoLink)}
		if(veg.intro)       { veggieRef.child('intro').set(veg.intro)}
		if(veg.harvestInfo) { veggieRef.child('harvestInfo').set(veg.harvestInfo)}
		if(veg.imgUrl)      { veggieRef.child('imgUrl').set(veg.imgUrl)}
		if(veg.name)        { veggieRef.child('name').set(veg.name)}
		if(veg.displayName) { veggieRef.child('displayName').set(veg.displayName)}
	}

	this.addUrl = function(name, url) {
		var veggieRef = new Firebase(vegUrl + '/' + name)
		veggieRef.child('imgUrl').set(url);
	}

	this.addInfo = function(veg) {
		console.log(veg)
		var veggieRef = new Firebase(vegUrl + '/' + veg.name)
		veggieRef.child('localImg').set(veg.localImg);
		veggieRef.child('intro').set(veg.intro);
		veggieRef.child('infoLink').set(veg.infoLink);
		veggieRef.child('harvestInfo').set(veg.harvestInfo);
	}

})