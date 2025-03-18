
const numbers = [12, 79, 35, 53, 70, 47];


//Old for loop vertion
for( let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
}


//New for of loop
for(const number of numbers){
    console.log(number);
}