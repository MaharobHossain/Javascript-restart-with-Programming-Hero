//---------Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));   // Output: 32
console.log(celsiusToFahrenheit(250));  // Output: 77
console.log(celsiusToFahrenheit(-10)); // Output: 14





//---------Task-2:

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


function countOccurrences(arr, target) {
    return arr.filter(num => num === target).length;
}

// Sample inputs
console.log(countOccurrences([5, 6, 11, 12, 98, 5], 5));  // Output: 2
console.log(countOccurrences([5, 6, 11, 12, 98, 5], 25)); // Output: 0


