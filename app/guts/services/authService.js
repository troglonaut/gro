var app = angular.module('gro');
app.service('authService', function($firebaseAuth){
	var ref = new Firebase("https://gro.firebaseio.com");
	ref.authWithOAuthPopup("google", function(error, authData) {
		if (error) {
			console.log("Login Failed.", error);
		} else {
			console.log("Authentication successful with:", authData)
		}
	})
})