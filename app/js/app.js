angular.module('OverwatchStatsApp', [
  'OverwatchStatsApp.controllers',
  'OverwatchStatsApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/heroes", {templateUrl: "partials/heroes.html", controller: "heroesController"}).
	otherwise({redirectTo: '/heroes'});
}]);
