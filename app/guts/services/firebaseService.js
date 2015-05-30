var app = angular.module('gro');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var fbUrl = 'https://gro.firebaseio.com/';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(fbUrl + 'users/' + userId));
  };

  this.getUserInfo = function(userId){
    return $firebaseArray(new Firebase(fbUrl + 'users/' + userId + '/info'));
  }
})