// use of arguments in js

function add(num1, num2, num3){
    console.log(num1, num2, num3);
    console.log(arguments);
    console.log(arguments[2]);  //output is Not Array, output is array like object
}

// add(21, 34, 56);
add(21, 34, 56, 73, 83, 73, 59);