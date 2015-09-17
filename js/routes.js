(function(){
	'use strict';

	angular.module('chatphidelis').config(function ($routeProvider){
		$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			controllerAs: 'vm',
			templateUrl: 'pages/home.html?12' 
		})
		.when('/login', {
			controller: 'LoginCtrl',
			controllerAs: 'vm',
			templateUrl: 'pages/login.html?1'
		})

	});


})();