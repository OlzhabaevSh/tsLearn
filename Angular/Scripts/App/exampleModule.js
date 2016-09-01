// самый обычный класс
var mathService = (function () {
    function srv() { }
    // самая обычная логика
    srv.prototype.sum = function (x, y) {
        return x + y;
    }

    return srv;
})();

// создаем модуль 'custom-module'
// регистрируем в нем сервис 'mathService'
angular.module('custom-module', []).service('mathService', mathService);



// создаем модуль 'app'
// в зависимость добавляем имя второго модуля.
var app = angular.module('app', ['custom-module']);

// main controller
// в качестве аргумента он получает сервис,
// который принадлежит другому модулю
var mainController = (function () {
    function ctrl(mathService) {
        this.operandA = 0;
        this.operandB = 0;
        this.result = 0;
        this.mathService = mathService;
    }

    ctrl.prototype.sum = function () {
        this.result = this.mathService.sum(this.operandA, this.operandB);
    }

    return ctrl;
})();
// указываем имя зависимости
mainController.$inject = ['mathService'];
// регистрируем контроллер
app.controller('mainController', mainController);