// синтаксис для typeScript взят из javaScript,
// с поддержкой обратной совместимости. Это значит, что
// вы можете писать вполне валидный js-код, в ts-файле
// ex1: object
var prsn = {
    name: "Admin",
    age: 28
};
// ex2: function
function parse(prs) {
    return prs.name + ", " + prs.age;
}
var res = parse(person);
console.info('look at res: ', res);
// Задача компилятора typeScript предоставить удобный 
// инструмент для создания js-кода. Это в первую очередь
// означает, что работа ts заканчавется ровно на том
// моменте, когда он выдаст вам js файл.
// ex3: error
//person.age = "my-error-value";
// если вы снимите коментарии с кода, то у вас
// не пройдет компиляция. соотвественно, у вас не 
// будет восоздан новый js файл
// для примера сравните свой код на ts, с кодом на js
//# sourceMappingURL=livecicle.js.map