(function () {

	'use strict';

	angular.module('app', ['ui.bootstrap', 'ui.router'])
		.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'partials/home/index.html',
					controller: 'HomeController',
					controllerAs: 'homeCtrl'
				});
		}]);
}());
(function () {

	'use strict';

	angular.module('app')
		.controller('HomeController', function () {
			
			var vm = this;

			vm.greeting = 'Welcome to Meanvironment!';
		});
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJob21lL2hvbWUuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFlBQUE7O0NBRUE7O0NBRUEsUUFBQSxPQUFBLE9BQUEsQ0FBQSxnQkFBQTtHQUNBLGlFQUFBLFVBQUEsZ0JBQUEsb0JBQUEsZUFBQTs7R0FFQSxtQkFBQSxVQUFBOztHQUVBO0tBQ0EsTUFBQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLGFBQUE7S0FDQSxZQUFBO0tBQ0EsY0FBQTs7OztBQ2RBLENBQUEsWUFBQTs7Q0FFQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxXQUFBLGtCQUFBLFlBQUE7O0dBRUEsSUFBQSxLQUFBOztHQUVBLEdBQUEsV0FBQTs7S0FFQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5ib290c3RyYXAnLCAndWkucm91dGVyJ10pXG5cdFx0LmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuXG5cdFx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuXG5cdFx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0XHQuc3RhdGUoJ2hvbWUnLCB7XG5cdFx0XHRcdFx0dXJsOiAnL2hvbWUnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAncGFydGlhbHMvaG9tZS9pbmRleC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXJBczogJ2hvbWVDdHJsJ1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcbn0oKSk7IiwiKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpXG5cdFx0LmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0XHR2bS5ncmVldGluZyA9ICdXZWxjb21lIHRvIE1lYW52aXJvbm1lbnQhJztcblx0XHR9KTtcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
