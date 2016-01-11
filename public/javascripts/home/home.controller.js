(function () {

	'use strict';

	angular.module('app')
		.controller('HomeController', function () {
			
			var vm = this;

			vm.greeting = 'Welcome to Meanvironment!';
			vm.manifesto = 'Now go create something awesome!';
			
		});
}());