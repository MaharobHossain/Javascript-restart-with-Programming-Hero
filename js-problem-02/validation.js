// Valid Number provider alert

function multiply(num1, num2){

//  console.log(typeof num1, typeof num2);
    if( typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provied a valid number";
    }
    let total = num1 * num2;
    return total;
}

const result = multiply(7, 'ten');
console.log(result);
