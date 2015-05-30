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
			if (error) {
				console.log("Login Failed.", error);
			} else {
				console.log("Authentication successful with:", authData)
			}
		})
  }


})