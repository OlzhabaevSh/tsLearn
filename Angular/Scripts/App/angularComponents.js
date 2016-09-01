// регистрация модуля
var app = angular.module('app', []);

// регистрация сервиса с именем 'myService'
app.service('myService', function () {
    // функция суммирования
    this.sum = function (x, y) {
        return x + y;
    }
});

// регистрация контроллера с именем 'myController'
app.controller('myController', function ($scope, myService) {
    
    // properties
    $scope.x = 0.0;
    $scope.y = 0.0;
    $scope.res = 0.0;

    // methods
    $scope.sum = function () {
        // вызываем функцию сервиса
        $scope.res = myService.sum($scope.x, $scope.y);
        $scope.x = 0;
        $scope.y = 0;
    }
})




