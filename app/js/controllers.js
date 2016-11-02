angular.module('OverwatchStatsApp.controllers', []).
	/* Heroes controller */
	controller('heroesController', function($scope, overwatchAPIservice) {
		$scope.nameFilter = null;
		$scope.heroesList = [];
		overwatchAPIservice.getHeroes().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.heroesList = response;
    });
	}).

	/* Hero details controller */
	
	controller('heroController', function($scope, overwatchAPIservice) {
    
    $scope.hero = null;

    overwatchAPIservice.getHeroDetails().success(function (response) {
        $scope.hero = response; 
    });
	

  });