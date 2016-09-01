// регистрация модуля
var app = angular.module('app', []);

var mainController = (function () {
    function ctrl() {
        this.isShow = true;
        this.titleExample = "";
        this.textExample
    }

    ctrl.prototype.init = function () {

    }

    return ctrl;
})();
// регистрация пример-контроллера
app.controller('mainController', mainController);


var myCustomComponentController = (function () {
    function ctrl() {

    }

    ctrl.prototype.show = function () {
        alert("title: " + this.title + "; Text: " + this.text)
    }

    return ctrl;
})();
// регистрация контроллера для компоненты
app.controller('myCustomComponentController', myCustomComponentController);

// создаем компонент
var myCustomComponent = {
    // ссылка на контроллер
    controller: 'myCustomComponentController',
    // ссылка на темплейт
    templateUrl: '/Scripts/App/myCustomComponent.html',
    // параметры
    bindings: {
        isOpen: '<',
        title: '<',
        text: '<'
    }
};
// регистрируем компоненту. Помним, что первый символ должен быть прописным
app.component('myCustomComponent', myCustomComponent);
