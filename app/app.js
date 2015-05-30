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
		.otherwise({
			redirectTo: '/'
		})
})