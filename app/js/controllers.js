angular.module('OverwatchStatsApp.controllers', []).
  controller('heroesController', function($scope, overwatchAPIservice) {
    $scope.nameFilter = null;
    $scope.heroesList = [];

    overwatchAPIservice.getHeroes().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.heroesList = response;
    });
  });