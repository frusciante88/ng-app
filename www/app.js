angular
	.module('ngEng', ['ngRoute', 'ngSanitize'])
	.config(function ($routeProvider, $locationProvider) {
		
		$routeProvider
            .when('/', {
                templateUrl: '/www/views/index.html',
                controller: 'indexCtrl'
            })
            .when('/ngSanitize', {
                templateUrl: '/www/views/ngsanitize.html',
                controller: 'ngsanitizeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
			
	})
	.controller('mainCntr', ['$scope', function($scope) {
		
	}]);