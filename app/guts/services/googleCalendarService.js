var app = angular.module('gro');
app.service('googleCalendarService', function($http, $q, $firebaseObject, $firebaseArray){

	var fbUrl = "https://gro.firebaseio.com";
	var fbRef = new Firebase(fbUrl);
	// var userUrl = fbUrl + '/users';

	this.makeCalendar = function auth(){

        var config = {
          'client_id': '238802456098-k877fsdam5n5g4v4vep8ali19ock1a39.apps.googleusercontent.com',
          'scope': 'https://www.googleapis.com/auth/calendar'
        };
        gapi.auth.authorize(config, function() {
          console.log('login complete');
          console.log(gapi.auth.getToken());
        });
      

		//  DON'T DELETE!
		// console.log(user.google.accessToken)
		// $http({
		// 	method: 'POST',
		// 	url: 'https://www.googleapis.com/calendar/v3/calendars?access_token=' + user.google.accessToken + '&key={AIzaSyA-XA09f52psm_Iq85SiP8TDHOLAIrDZ6U}',
		// 	data: angular.toJson(newCalData)
		// }).then(function(data){
		// 	console.log(data)
		// })
	}

	this.addEvents = function(eventsObj){
		for(var event in eventsObj){

		}
	}

	this.getEventInfo = function(user){
		var uid = user.$id;
		var allEvents = []
		var dfd = $q.defer();
		fbRef.child('users').child(uid).child('calendar').child('calEvents').once('value', function(snapshot){
			eventObj = snapshot.val()
			for(key in eventObj){
				var eventJson = angular.toJson(eventObj[key])
				allEvents.push(eventJson)
			}
			dfd.resolve(allEvents)
		})
		return dfd.promise;
	}

})