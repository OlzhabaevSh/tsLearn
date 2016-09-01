// регистрация модуля
var app = angular.module('app', []);

// типичный пример туториалов. Но делать так не надо.
// самая веская причина: если использовать минификатор js
// то у вас в рантайме выйдет ошибка, так как
// '$scope' заменится на какой нибудь 'a'.
app.controller('simpleCtrl', function ($scope) {
    $scope.title = "";

    $scope.init = function () {
        $scope.title = "simpleCtrl Title";
    }

});


// вариант получше. теперь '$scope' экранирован,
// но минус в том, что переиспользовать код контроллера не получится
app.controller('normalCtrl', ['$scope', function ($scope) {
    $scope.title = "normalCtrl";

    $scope.init = function () {
        $scope.title = "normalCtrl Title";
    }
}]);

// прототип стайл
// почти ООП стиль
// минус один всё же есть. регистрация в DI.
var heroicCtrl = (function () {
    // конструктор
    function ctrl($scope) {
        // тут пишем все атрибуты
        this.title = "";
    }

    // функция init
    ctrl.prototype.init = function () {
        this.title = "heroicCtrl Title";
    }

    return ctrl;
})()
// контроллер ок, но в регистрации, проблема
app.controller('heroicCtrl', ['$scope', heroicCtrl]);



// более правильный вариант
var epicCtrl = (function () {
    // конструктор
    function ctrl($scope) {
        // тут пишем все атрибуты
        this.title = "";
    }

    // функция init
    ctrl.prototype.init = function () {
        this.title = "epicCtrl Title";
    }

    return ctrl;
})()
epicCtrl.$inject = ['$scope'];

// вот так, самое то
app.controller('epicCtrl', epicCtrl);

