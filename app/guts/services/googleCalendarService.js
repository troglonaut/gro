var app = angular.module('gro');
app.service('googleCalendarService', function($http, $q, $firebaseObject, $firebaseArray){

	var fbUrl = "https://gro.firebaseio.com";
	var fbRef = new Firebase(fbUrl);
	// var userUrl = fbUrl + '/users';

	this.makeCalendar = function(newCalData){
		$http({
			method: 'POST',
			url: 'https://www.googleapis.com/calendar/v3/calendars?key={AIzaSyA-XA09f52psm_Iq85SiP8TDHOLAIrDZ6U}',
			data: angular.toJson(newCalData)
		})
	}

	this.addEvents = function(eventsObj){
		for(var event in eventsObj){

		}
	}

	this.getEventInfo = function(user){
		console.log(user)
		var uid = user.$id;
		console.log(uid)
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