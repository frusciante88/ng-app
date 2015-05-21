angular
	.module('ngEng', ['ngRoute', 'ngSanitize'])
	.config(function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
		
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://www.dday.it/*']);

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

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