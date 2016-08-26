// ex 1. interface
var person = {
    name: "Admin",
    age: 28
};
var EmailPostSender = (function () {
    function EmailPostSender() {
        this._isValid = false;
    }
    EmailPostSender.prototype.isValid = function () {
        return this._isValid;
    };
    EmailPostSender.prototype.send = function (items) {
        /* Ваша реализация */
    };
    return EmailPostSender;
}());
// ex 3. class
var QueryWorker = (function () {
    function QueryWorker() {
        this._queries = new Array();
    }
    // положить в очередь
    QueryWorker.prototype.push = function (queryId) {
        this._queries.push(queryId);
    };
    // вытащить из нее
    QueryWorker.prototype.pull = function () {
        var item = this._queries[0];
        this._queries.splice(0, 1);
        return item;
    };
    return QueryWorker;
}());
// ex 4. Enum
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["new"] = 0] = "new";
    TaskStatus[TaskStatus["started"] = 1] = "started";
    TaskStatus[TaskStatus["finished"] = 2] = "finished";
    TaskStatus[TaskStatus["resolved"] = 3] = "resolved";
})(TaskStatus || (TaskStatus = {}));
var Task = (function () {
    function Task() {
        this.currentStatus = TaskStatus.new;
    }
    return Task;
}());
var task = new Task();
// как делали
task.currentStatus = 1;
// а как можно было бы
task.currentStatus = TaskStatus.started;
//# sourceMappingURL=class.js.map