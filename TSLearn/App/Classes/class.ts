// ex 1. interface

interface IPerson {
    name?: string;
    age: number;
}

var person: IPerson = {
    name: "Admin",
    age: 28
};

var person2: IPerson = {
    age: 100
}

// ex 2. contract

interface IPostSender {
    isValid(): boolean;
    send(items: Array<number>): void;
}

class EmailPostSender implements IPostSender {

    private _isValid: boolean;

    constructor() {
        this._isValid = false;
    }

    isValid(): boolean {
        return this._isValid;
    }

    send(items: Array<number>): void {
        /* Ваша реализация */
    }

}

// ex 3. class

class QueryWorker {

    // приватное поле
    private _queries: Array<number>;

    constructor() {
        this._queries = new Array();
    }

    // положить в очередь
    push(queryId: number): void {

        this._queries.push(queryId);

    }

    // вытащить из нее
    pull(): number {

        let item = this._queries[0];

        this._queries.splice(0, 1);

        return item;
    }


}

// ex 4. Enum

enum TaskStatus {
    new,
    started,
    finished,
    resolved
}

class Task {

    public currentStatus: TaskStatus;

    constructor() {
        this.currentStatus = TaskStatus.new;
    }

}


var task = new Task();

// как делали
task.currentStatus = 1;
// а как можно было бы
task.currentStatus = TaskStatus.started;
