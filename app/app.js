var app = angular.module('gro', ['ngRoute', 'firebase']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/guts/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/register', {
			templateUrl: 'app/guts/register/register.html',
			controller: 'registerCtrl'
		})
		.when('/dashboard:userId', {
			templateUrl: 'app/guts/dashboard/dash.html',
			controller: 'dashCtrl',
			resolve: {
	      userReference: function(firebaseService, $route){
	        return firebaseService.getUser($route.current.params.userId);
	      },
	      thingsReference: function(firebaseService, $route){
	        return firebaseService.getThings($route.current.params.userId);
	      }
    	}
		})
		.otherwise({
			redirectTo: '/'
		})
})