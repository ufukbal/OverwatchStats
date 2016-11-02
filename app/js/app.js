angular.module('OverwatchStatsApp', [
  'OverwatchStatsApp.controllers',
  'OverwatchStatsApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/heroes", {templateUrl: "partials/heroes.html", controller: "heroesController"}).
	when("/heroes/Zarya/", {templateUrl: "partials/hero.html", controller: "heroController"}).
	otherwise({redirectTo: '/heroes'});
}]);
