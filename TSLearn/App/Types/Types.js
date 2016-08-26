// ex 1; object types
var age;
// age = "error-value"; this is a error
age = 28;
var name;
// name = 24; this is a error
name = "Admin";
// ex 2; function types
function notUseTypeFunc(x, y) {
    return x + y;
}
var strRes = notUseTypeFunc("a", "b");
console.info('strRes', strRes);
var numbRes = notUseTypeFunc(1, 2);
console.info('numbRes', numbRes);
var errorRes = notUseTypeFunc("1", 2);
console.info('errorRes', errorRes); // really?
// use types func
function useTypeFunc(x, y) {
    return x + y;
}
// show error
// var neverRes = useTypeFunc(1, "2");
//# sourceMappingURL=Types.js.map