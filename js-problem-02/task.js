/**
  Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights1 = [167, 190, 120, 165, 137];

function findLowestNumber(arr) {
    return Math.min(...arr);
}

console.log(findLowestNumber(heights1)); 

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





/**
 * Task -2:
Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(arr) {
    let smallest = arr[0]; // Assume the first name is the smallest

    for (let name of arr) {
        if (name.length < smallest.length) {
            smallest = name; // Update if a shorter name is found
        }
    }

    return smallest;
}

let smallName = findSmallestName(friends);
console.log("The small Name is: ", smallName); // Output: 'ron'
// console.log(findSmallestName(friends)); // Output: 'ron'






/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

 */


function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalBudget = (laptopQuantity * laptopPrice) + (tabletQuantity * tabletPrice) + (mobileQuantity * mobilePrice);
    
    return totalBudget;
}

 let totalPrice = calculateElectronicsBudget(3, 5, 7);
 console.log('Total price is: ', totalPrice);
 // console.log(calculateElectronicsBudget(2, 1, 3)); // Output: 145000
