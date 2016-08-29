// теперь класс может быть импортирован в другой файл
export class Person {

    constructor(public Name: string) {

    }

    public say(param: string): void {
        console.log(this.Name + ": " + param);
    }

}