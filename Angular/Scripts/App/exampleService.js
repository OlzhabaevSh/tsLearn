// регистрация модуля
var app = angular.module('app', []);



// creating service
var logicService = (function () {
    // конструктор. не особо нужен
    function ctrl() {
        this.persons = [];
    }

    // метод вернет список персонов
    ctrl.prototype.getPersons = function () {
        if (this.persons.length <= 0) {
            // тут будет ваш асинхронный запрос, а пока что заглушка
            this.persons = this.generatePersons();
        }
        return this.persons;
    }

    // заглушка
    ctrl.prototype.generatePersons = function () {
        var res = new Array();
        for (var i = 0; i < 5; i++) {
            res.push({
                id: i,
                name: "Name_" + (i + 1),
                surName: "SurName_" + (i + 1),
                position: "Worker"
            });
        }
        return res;
    }

    // тут будет добавление нового пёрсона
    ctrl.prototype.addPerson = function (name, surName, position) {

        var id = this.persons.length;

        this.persons.push({
            id: id,
            name: name,
            surName: surName,
            position: position
        });
    }

    return ctrl;

})();
// regist service
app.service('logicService', logicService);
// regist factory
//app.factory('logicService', function () { return new logicService() });



// creating controller list
var personListController = (function () {
    // констркутор. получаем зависимости и регистрируем поля
    function ctrl(logicService) {
        this.persons = [];
        this.logicService = logicService;
    }

    // метод инициализации
    ctrl.prototype.init = function () {
        this.refresh();
    }

    // обновляем список
    ctrl.prototype.refresh = function () {
        this.persons = this.logicService.getPersons();
    }

    return ctrl;
})()
// add inject dependencies
personListController.$inject = ['logicService'];
// regist controller
app.controller('personListController', personListController);



// creating controller form
var personFormController = (function () {
    // конструктор. получаем зависимости и регистрируем поля
    function ctrl(logicService) {
        this.name = "";
        this.surName = "";
        this.position = "";
        this.logicService = logicService;
    }

    // метод инициализации
    ctrl.prototype.init = function () {
        this.refresh();
    }

    // обновляем значения полей
    ctrl.prototype.refresh = function () {
        this.name = "";
        this.surName = "";
        this.position = "";
    }

    // добавляем персона, вызывая метод сервиса
    ctrl.prototype.add = function () {
        this.logicService.addPerson(this.name, this.surName, this.position);
        this.refresh();
    }

    return ctrl;
})()
// add inject dependencies
personFormController.$inject = ['logicService'];
// regist controller
app.controller('personFormController', personFormController);