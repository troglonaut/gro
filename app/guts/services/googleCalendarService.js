var app = angular.module('gro');
app.service('googleCalendarService', function($http, $q, $firebaseObject, $firebaseArray){

	var fbUrl = "https://gro.firebaseio.com";
	var fbRef = new Firebase(fbUrl);

	this.authCal = function auth(){
    var config = {
      'client_id' : '238802456098-k877fsdam5n5g4v4vep8ali19ock1a39.apps.googleusercontent.com',
      'scope'     : 'https://www.googleapis.com/auth/calendar'
    };
    var dfd = $q.defer()
    gapi.auth.authorize(config, function() {
      console.log('login complete');
      // console.log(gapi.auth.getToken());
      var token = gapi.auth.getToken();
      dfd.resolve(token)
    }); 
    return dfd.promise  
  }

  this.makeCalendar = function(token, newCalData){
		console.log(token)
			return $http({
				method : 'POST',
				url    : 'https://www.googleapis.com/calendar/v3/calendars?access_token=' + token + '&key={AIzaSyA-XA09f52psm_Iq85SiP8TDHOLAIrDZ6U}',
				data   : angular.toJson(newCalData)
			})
	}

	this.setUserCalId = function(user, calId){
		var dfd = $q.defer()
		fbRef.child('users').child(user.id).child('userCalId').set(calId);
		dfd.resolve(user)
		return dfd.promise;
	}

	this.addEvents = function(eventsArr, calId, token){
		for(var i = 0; i < eventsArr.length; i++){
			console.log(eventsArr[i])
			$http({
				method : 'POST',
				url    : 'https://www.googleapis.com/calendar/v3/calendars/' + calId +'/events?access_token=' + token + '&key={AIzaSyA-XA09f52psm_Iq85SiP8TDHOLAIrDZ6U}',
				data   : eventsArr[i]
			}).then(function(data){
				console.log(data)
			})
		}
	}

	this.getEventInfo = function(user){
		var uid       = user.$id;
		var allEvents = []
		var dfd       = $q.defer();
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