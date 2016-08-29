// импортируем файлы PersonClass.ts
import * as personClass from "./PersonClass";

// создаем объект классса Person. Обратите внимание:
// в html-template отсуствует какая либо ссылка
// на файл PersonClass.ts
let person = new personClass.Person("Admin");

// вызываем метод
person.say("Hello!");