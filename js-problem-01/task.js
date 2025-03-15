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

console.log(countOccurrences([5, 6, 11, 12, 98, 5], 5));  // Output: 2
console.log(countOccurrences([5, 6, 11, 12, 98, 5], 25)); // Output: 0







//---------Task-3:
// Write a function to count the number of vowels in a string.


function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


console.log(countVowels("hello"));         // Output: 2
console.log(countVowels("javascript"));    // Output: 3
console.log(countVowels("bcdfg"));         // Output: 0
console.log(countVowels("AEIOUaeiou"));    // Output: 10





//---------Task-4:
// Generate a random number between 10 to 20.

function generateRandomNumber() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

console.log(generateRandomNumber());  // Output: A random number between 10 and 20