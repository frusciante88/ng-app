angular
	.module('ngApp')
	.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.invia = function () {
			$http.post('/getRequest')
				.success(function(){
					console.log('finito');
				});
		}

	}]);