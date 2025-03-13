// array odd item sum defiend

function oddAvarage(numbers){
    for( const number of numbers ){
        if( number % 2 === 1){
            console.log(number);
        }
    }
}

const numbers = [45, 25, 68, 50, 42, 69, 49];
const avg = oddAvarage(numbers);
console.log('Avarege of the odd number is: ', avg);