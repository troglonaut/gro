var app = angular.module('gro');
app.service('plantScheduleService', function($http, $q, $firebaseObject, $firebaseArray){

	var plantUrl = "https://gro.firebaseio.com";
	var plant = {
	name: 'Corn',
	scientificName: '',
	light: '',
	water: '',
	info: 'some link',
	zoneInfo: {
			zone3: {
				directSow: {
					start: '',
					end: ''
				},
				indoorSow: {
					start: '',
					end: ''
				},
				transplant: {
					start: '',
					end: ''
				}
			},
			zone4: {
				directSow: {
					start: '',
					end: ''
				},
				indoorSow: {
					start: '',
					end: ''
				},
				transplant: {
					start: '',
					end: ''
				}
			},
			zone5: {
				directSow: {
					start: '',
					end: ''
				},
				indoorSow: {
					start: '',
					end: ''
				},
				transplant: {
					start: '',
					end: ''
				}
			}

		

})