var app = angular.module('arrayApp');

app.controller('arrayController', function ($scope, $log, arrayService) {
    
    $scope.tempArray = arrayService.getData();
    $log.info($scope.tempArray);

});