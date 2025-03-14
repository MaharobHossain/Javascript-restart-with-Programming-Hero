
let a = 8;
let b = 4;
console.log(a, b);
// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);


//______________

let x = 3;
let y = 9;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);