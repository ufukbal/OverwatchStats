angular.module('OverwatchStatsApp.services', []).
  factory('overwatchAPIservice', function($http) {

    var overwatchAPI = {};

    overwatchAPI.getHeroes = function() {
      return $http({
        method: 'GET', 
        url: 'https://api.lootbox.eu/pc/eu/Gunslinger-2696/competitive-play/heroes'
      });
    }
	
	overwatchAPI.getHeroDetails = function() {
      return $http({
        method: 'GET', 
        url: 'https://api.lootbox.eu/pc/eu/Gunslinger-2696/competitive-play/hero/Zarya/'
      });
    }

    return overwatchAPI;
  });