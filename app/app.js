var app = angular.module('gro', ['ngRoute', 'firebase']);
app.config(function($routeProvider, $httpProvider){
	$routeProvider

		.when('/', {
			templateUrl: 'guts/home/home.html',
			controller: 'homeCtrl'
		})

		.when('/register/:userId', {
			templateUrl: 'guts/register/register.html',
			controller: 'registerCtrl'
			// resolve: {}
		})

		.when('/plantChoice/:userId', {
			templateUrl: 'guts/plantChoice/plantChoice.html',
			controller: 'plantChoiceCtrl'
		})

		.when('/dashboard/:userId', {
			templateUrl: 'guts/dashboard/dash.html',
			controller: 'dashCtrl'
			// resolve: {}
		})

		.otherwise({
			redirectTo: '/'
		})

})