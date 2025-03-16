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
//console.log(result);



// Valid string provider alert (Full Name)

function fullName( firstName, lastName){

    //  console.log(typeof firstName, typeof lastName);
    if( typeof firstName !== 'string' ){
        return 'First name shoud be a string';
    }
    else if(typeof lastName !== 'string'){
        return 'Last name shoud be a string';
    }
    let full = firstName + '  ' + lastName;
    return full;
}

let full = fullName(4, 'Ali');
console.log(full);