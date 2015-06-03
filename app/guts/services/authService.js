var app = angular.module('gro');
app.service('authService', function($firebaseAuth, $firebaseArray, $firebaseObject){
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
			// if(authData.created)

				if (error) {
					console.log("Login Failed.", error);
				} else {
  				authData.timestamp = new Date().toISOString();
  				authData.firstName =  authData.google.cachedUserProfile.given_name;
  				authData.lastName =  authData.google.cachedUserProfile.family_name;
  				authData.gender =  authData.google.cachedUserProfile.gender;
  				authData.photoUrl =  authData.google.cachedUserProfile.picture;
  				fbRef.child('users').child(authData.uid.replace('google:', '')).set(authData);
					console.log("Authentication successful with:", authData)
					cb(authData)
				}
		})		
  }

  this.getUser = function(id){
  	var url = userUrl + '/' + id;
  	var ref = new Firebase(url);
  	var userObj = $firebaseObject(ref);
  	return userObj;
  }


  this.logOut = function(){
  	fbRef.unauth();
  }


})