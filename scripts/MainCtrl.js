// scripts/MainCtrl.js

angular
	.module('avengersApp')
	.controller('MainCtrl', function($scope, dataService) {

		$scope.getHeroes = function()  {// javascript hoisting	
			dataService.avengers().then(function(response) {
				$scope.avengers = response;
			});
		};


	}); // end 
