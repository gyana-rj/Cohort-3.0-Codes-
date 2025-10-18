"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet('flipper');
function sum(a, b) {
    return a + b;
}
console.log(`Sum is : ${sum(2, 3)}`);
function isLegal(age) {
    if (age > 18)
        return true;
    else {
        return false;
    }
}
console.log(isLegal(19));
//# sourceMappingURL=index.js.map