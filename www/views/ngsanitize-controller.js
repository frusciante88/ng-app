angular
	.module('ngEng')
	.controller('ngsanitizeCtrl', ['$scope', '$sce', '$window', function($scope, $sce, $window) {

		$scope.htmlBody = '<h1 style="color:blue" onclick="alert(\'ciao\');">test</h1>';

		$scope.$watch('htmlBody', function(v) {
			$scope.trustHtml = $sce.trustAsHtml($scope.htmlBody);
			$scope.trustHtmlJS = $sce.trustAsJs($scope.htmlBody);

		});

		$scope.linkInclude = 'http://www.dday.it';

	}]);