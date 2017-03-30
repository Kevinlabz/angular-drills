var app = angular.module('myApp');
app.controller('mainCtrl', function($scope, $log, myService){

    $scope.tempArray = myService.getData();
    $log.info($scope.tempArray);

});