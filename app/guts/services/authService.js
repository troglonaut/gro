var app = angular.module('gro');
app.service('authService', function($firebaseAuth){
	//reference to Firebase endpoint.
	var fbUrl = "https://gro.firebaseio.com";

  //Creates an object using the Firebase Constructor with our endpoint passed in
  var fbRef = new Firebase(fbUrl);
  var authObj = $firebaseAuth(fbRef);

  //function for homepage login
  this.login = function(){
  	fbRef.authWithOAuthPopup("google", function(error, authData) {
			// if(authData.created)
				if (error) {
					console.log("Login Failed.", error);
				} else {
					// authObj.$createUser({
					// 	name: 'Eric'
					// })
  				authData.location = "83318";
  				authData.timestamp = new Date().toISOString();
  				fbRef.child('users').child(authData.uid.replace('google:', '')).set(authData);
					console.log("Authentication successful with:", authData)
				}

		// 		.thenfunction(authData){
  //     if (authData){
  //       authData.name = user.name;
  //       authData.timestamp = new Date().toISOString();
  //       fbRef.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
		})
		
  }

  this.register = function(user, cb){
  	authObj.$createUser({
  		username: user.username,
  		email: user.email,
  		zip: user.zip
  	})
  }


})