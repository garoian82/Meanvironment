(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ui.bootstrap'])
		.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "storageProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, storageProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider
		}]);
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxZQUFBOztDQUVBOztDQUVBLFFBQUEsT0FBQSxPQUFBLENBQUEsYUFBQTtHQUNBLG9GQUFBLFVBQUEsZ0JBQUEsb0JBQUEsZUFBQSxpQkFBQTs7R0FFQSxtQkFBQSxVQUFBOztHQUVBOztLQUVBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnXSlcblx0XHQuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyLCBzdG9yYWdlUHJvdmlkZXIpIHtcblxuXHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcblxuXHRcdFx0JHN0YXRlUHJvdmlkZXJcblx0XHR9KTtcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
