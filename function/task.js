//    ------------Task 1------->
//Take four parameters. Multiply the four numbers and then return the result.

function multiplyNumbers(num1, num2, num3, num4) {
    const multiple = num1 * num2 * num3 * num4;
    return multiple;
}

console.log(multiplyNumbers(9, 5, 4, 7)); 
console.log(multiplyNumbers(8, 7, 8, 7));



//    ------------Task 2------->
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// ---------This is Easy System----->
// function processNumber(num) {
//     if (num % 2 === 0) {
//         return num / 2; // If even, divide by 2
//     } else {
//         return num * 2; // If odd, multiply by 2
//     }
// }

function processNumber(num) {
    if (num % 2 === 0) {
        num = num / 2; // If even, divide by 2
    } else {
        num = num * 2; // If odd, multiply by 2
    }
    return num;
}

console.log(processNumber(15)); // Output: 30 (odd, so multiplied by 2)
console.log(processNumber(18)); // Output: 9 (even, so divided by 2)




//    ------------Task 3------->
//  Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
    if (arr.length !== size) {
        return "Error: Array size does not match the given size.";
    }

    let sum = arr.reduce((total, num) => total + num, 0);
    return sum / size;
}

console.log(make_avg([10, 20, 30, 40, 50], 5)); // Output: 30
console.log(make_avg([5, 15, 25], 3)); // Output: 15
console.log(make_avg([5, 15, 25, 38], 3)); // Output: Error: Array size does not match the given size






//    ------------Task 4------->
//  Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.




function count_zero(binaryString) {
    let count = 0;

    for (let char of binaryString) {
        if (char === '0') {
            count++;
        }
    }

    return count;
}

console.log(count_zero("1010100")); // Output: 3
console.log(count_zero("00001111")); // Output: 4
console.log(count_zero("1111")); // Output: 0






//    ------------Task 5------->
//  Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.


function odd_even(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(odd_even(10)); // Output: "Even"
console.log(odd_even(7));  // Output: "Odd"
console.log(odd_even(0));  // Output: "Even"
