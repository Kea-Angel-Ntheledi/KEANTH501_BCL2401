//Challange 2
//Write a function deepEqual that takes two values, a and b, and returns true if they are equal, and false otherwise. However, if a and b are objects, the function should check whether their properties are equal recursively.
//Example: deepEqual({a: 1, b: 2}, {a: 1, b: 2}) should return true, while deepEqual({a: 1, b: 2}, {a: 1, b: 3}) should return false.

//Solution:
function deepEqual(a, b) {
if (typeof a != "object" || typeof b != "object") {
return a === b;
}
let keysA = Object.keys(a);
let keysB = Object.keys(b);
if (keysA.length != keysB.length) {
return false;
}
for (let key of keysA) {
if (!deepEqual(a[key], b[key])) {
return false;
}
}
return true;
}
