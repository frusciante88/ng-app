angular
    .module('ngApp')
    .controller('localizationCtrl',['$scope', '$translate', function ($scope, $translate) {

        $scope.changeLanguage = function (lan) {
            $translate.use(lan);
        };

    }]);