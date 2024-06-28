// challange 1
//Write a function range that takes two arguments, start and end, and returns an array containing all numbers from start up to and including end.
//Example: range(1, 5) should return [1, 2, 3, 4, 5].

//Solution:
function range(start, end) {
let result = [];
for (let i = start; i
result.push(i);
}
return result;
}
