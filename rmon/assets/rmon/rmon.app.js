define(['rmon/rmon.controllers'], function(controllers) {
  angular.module('rmon', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.when('/', {
        templateUrl: '/assets/templates/dashboard.html',
        controller: controllers.RMonCtrls
      });
    }]);
});
