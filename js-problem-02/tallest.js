// Tallest number find in js

const heights = [45, 86, 38, 49, 68, 56, 79, 99, 26, 43];

function getTallestNumber(numbers){
    let max = numbers[0];
    for( const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getTallestNumber(heights);
console.log("Tallest number is:", max);