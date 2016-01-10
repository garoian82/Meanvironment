(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ui.bootstrap'])
		.config(function ($stateProvider, $urlRouterProvider, $httpProvider, storageProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider
		});
}());