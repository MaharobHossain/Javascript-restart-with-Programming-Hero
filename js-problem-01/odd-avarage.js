// array odd item sum defiend

function oddAvarage(numbers){

    const odds = [];
    for( const number of numbers ){
        if( number % 2 === 1){
           // console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [45, 25, 68, 50, 42, 69, 49, 533];
const avg = oddAvarage(numbers);
console.log('Avarege of the odd number is: ', avg);