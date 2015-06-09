var app = angular.module('gro', ['ui.router', 'firebase', 'ui.bootstrap']);
app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('home', {
			templateUrl: 'guts/home/home.html',
			controller: 'homeCtrl',
			url: '/'
		})

		.state('register', {
			templateUrl: 'guts/register/register.html',
			controller: 'registerCtrl',
			url: '/register/:userId'
			// resolve: {}
		})

		.state('plantChoice', {
			// abstract: true,
			templateUrl: 'guts/plantChoice/plantChoice.html',
			controller: 'plantChoiceCtrl',
			url: '/plantChoice/:userId'
		})

		.state('plantChoice.subview', {
			templateUrl: 'guts/plantChoice/plantChoice.subview.html',
			controller: 'plantChoiceCtrl',
			url: '/:subview'
			// controller: function($scope, $stateParams) {
			// 	$scope.subview = $stateParams.subview
			// }
		})

		.state('dashboard', {
			templateUrl: 'guts/dashboard/dash.html',
			controller: 'dashCtrl',
			url: '/dashboard/:userId'
			// resolve: {}
		})

		.state('plant-setup', {
			templateUrl: 'guts/plantSetup/plantSetup.html',
			controller: 'plantSetupCtrl',
			url: '/plant-setup'
		})

})