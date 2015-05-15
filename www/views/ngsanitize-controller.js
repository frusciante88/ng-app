angular
	.module('ngEng')
	.controller('ngsanitizeCtrl', ['$scope', '$sce', function($scope, $sce) {
		 
		 $scope.html = '<p style="color:blue">Hey!! Passa con il ' +
               '<em style="color:Red" onmouseover="this.textContent=\'Click\'">Mouse</em>\n' +
               'qua sopra</p>';
         
		 $scope.withoutSanitize = function () {
             return $sce.trustAsHtml($scope.html);
		 };
		 
	}]);