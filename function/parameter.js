// ____________Square or Borgo ber korar function______________>

/**
 * borgo------
 * 4*4 = 16;
 * 5*5 = 25;
 * 10*10 = 100;
 * 11*11 = 121;
 */


function borgo( number ){
    console.log('Value of the number peramitter: ', number);
    const square = number * number;
    console.log('Squar of the given number is: ', square);
}
borgo(30);
borgo(150);


function plusNumber(num1, num2, num3){
    const sum = num1 + num2 +num3;
    console.log(sum);
}
plusNumber(10, 21, 40);
plusNumber(1000, 600, 200);

function biogFoll( value1, value2, value3){
    const biog = value1 + value2 - value3;
    console.log(biog);
}
biogFoll(40, 20, 10);