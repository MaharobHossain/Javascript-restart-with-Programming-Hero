// Array operation use in js

function sumNumber(numbers) {

    let sum = 0;
    for( const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const num = [3, 5, 6, 3, 9];
const sum = sumNumber(num);
console.log(sum);




// function sumEvenNumber(numbers){
//     let sum = 0;
//     for( const number of numbers){
//         if(number %2 === 0){
//             console.log(number);
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const sum = sumEvenNumber(numbers);
// console.log('Total sum is: ', sum);