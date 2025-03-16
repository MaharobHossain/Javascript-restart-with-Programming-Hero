/**
  Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

// const heights2 = [167, 190, 120, 165, 137];

// function findLowestNumber(arr) {
//     return Math.min(...arr);
// }

// console.log(findLowestNumber(heights2)); 

const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(heights2);
console.log("The cheapest price is:", cheap);

