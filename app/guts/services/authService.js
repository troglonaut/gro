var app = angular.module('gro');
app.service('authService', function($http, $q, $firebaseAuth, $firebaseArray, $firebaseObject){
	//reference to Firebase endpoint.
	var fbUrl = "https://gro.firebaseio.com";
	var userUrl = fbUrl + '/users';

  //Creates an object using the Firebase Constructor with our endpoint passed in
  var fbRef = new Firebase(fbUrl);
  var userArray = $firebaseArray(new Firebase(userUrl));
  var authObj = $firebaseAuth(fbRef);

  //function for homepage login
  this.login = function(cb){
  	fbRef.authWithOAuthPopup("google", function(error, authData) {
				// var id = authData.uid.replace('google:', '')
    //     var verifiedUrl = userUrl + '/' + id
    //     var varRef = new Firebase(verifiedUrl);
        console.log(authData)
        if (error) {
					console.log("Login Failed.", error);
				} else {
  				authData.timestamp = new Date().toISOString();
  				authData.firstName =  authData.google.cachedUserProfile.given_name;
  				authData.lastName =  authData.google.cachedUserProfile.family_name;
  				authData.gender =  authData.google.cachedUserProfile.gender;
  				authData.photoUrl =  authData.google.cachedUserProfile.picture;
          authData.id = authData.uid.replace('google:', '')
  				fbRef.child('users').child(authData.uid.replace('google:', '')).set(authData);
					console.log("Authentication successful with:", authData)
					cb(authData)
				}
		})		
  }

  // used in registerCtrl.js
  this.getUser = function(id){
  	var url = userUrl + '/' + id;
  	var ref = new Firebase(url);
  	var userObj = $firebaseObject(ref);
  	return userObj;
  }

  this.logOut = function(){
  	fbRef.unauth();
  }

  //used in $scope.registerUser on registerCtrl.js
  this.getZone = function(zip){
  	var dfd = $q.defer();
  	$http({
  		method: 'GET',
  		url: '/api/hardiness?zipCode=' + zip,
  	}).then(function(data){
  		// console.log(data)
  		var userData = {};
  		betterData = data.data.LOCATIONS.LOCATION[0].$
  		console.log(betterData)
  		userData.zone = betterData.PHZ.substr(5, 2);
  		userData.zoneTemp = betterData.PHZ.substr(9);
  		userData.shortZone = betterData.PHZ.substr(5, 1);
  		userData.firstFreeze = betterData.FF;
  		userData.lastFreeze = betterData.LF;
  		userData.TMAX = betterData.TMAX;
  		userData.TMIN = betterData.TMIN;
  		userData.city = betterData.ZN;
  		userData.state = betterData.ZSTNM;
  		userData.stateAbb = betterData.ZSTCD;
  		dfd.resolve(userData);
  	})
  	return dfd.promise;
  }

})