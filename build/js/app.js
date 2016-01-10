(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ui.bootstrap'])
		.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "storageProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, storageProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
		}]);

}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxZQUFBOztDQUVBOztDQUVBLFFBQUEsT0FBQSxPQUFBLENBQUEsYUFBQTtHQUNBLG9GQUFBLFVBQUEsZ0JBQUEsb0JBQUEsZUFBQSxpQkFBQTs7R0FFQSxtQkFBQSxVQUFBOztHQUVBOzs7S0FHQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJ10pXG5cdFx0LmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGh0dHBQcm92aWRlciwgc3RvcmFnZVByb3ZpZGVyKSB7XG5cblx0XHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuXHRcdFx0JHN0YXRlUHJvdmlkZXJcblx0XHR9KTtcblxufSgpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
