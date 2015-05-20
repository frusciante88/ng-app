angular
	.module('ngEng')
	.controller('ngsanitizeCtrl', ['$scope', '$sce', '$window', function($scope, $sce, $window) {
		 
		 $scope.html = '<p style="color:blue">Hey!! Passa con il ' +
               '<em style="color:Red" onmouseover="this.textContent=\'Click\'">Mouse</em>\n' +
               'qua sopra</p>';
         
		 $scope.withoutSanitize = function () {
             return $sce.trustAsHtml($scope.html);
		 };
		 
		 $scope.htmlBody = 'Questa è una <h1>PROVA</h1>';
		 
		 $scope.test = function(){
			 $window.location.href = 'http://www.google.it';
		 };
		 
		 $scope.link = $sce.getTrustedResourceUrl('http://www.google.it');
	}]);