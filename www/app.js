angular
	.module('ngApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate'])
	.config(function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider, $translateProvider) {
		
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://www.dday.it/*']);
        //$http.defaults.headers.post['X-CSRFToken'] = 'CIAO';
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $translateProvider.useSanitizeValueStrategy('escaped');

        $translateProvider.translations('en', {
            HEADLINE: 'Hello there, This is my awesome app!',
            INTRO_TEXT: 'And it has i18n support!'
        }).translations('it', {
            HEADLINE: 'Ciao, questa e la mia app!',
            INTRO_TEXT: 'Ha il supporto a i18n!'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'www/languages/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');

		$routeProvider
            .when('/', {
                templateUrl: '/www/views/index.html',
                controller: 'indexCtrl'
            })
            .when('/security', {
                templateUrl: '/www/views/security.html',
                controller: 'securityCtrl'
            })
            .when('/localization', {
                templateUrl: '/www/views/localization.html',
                controller: 'localizationCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
			
	})
    .run( function run($http){
        $http.defaults.headers.post['X-CSRFToken'] = 'piip';
    })
	.controller('mainCntr', ['$scope', function($scope) {
		
	}]);