(function () {

	'use strict';

	angular.module('app', ['ui.bootstrap', 'ui.router'])
		.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'partials/home/index.html',
					controller: 'HomeController',
					controllerAs: 'homeCtrl'
				});
		});
}());