// 3 ta sonkhar moddhe theke boro sonkha ber kora if-else use kore

let bati = 90;
let kiminal = 95;
let kasem = 99;

if( bati > kiminal && bati > kasem ){
    console.log("Bati is a good student");
}
else if( kiminal > bati && kiminal > kasem ){
    console.log("Kiminal is a good student");
}
else{
    console.log("Kasem is a good student");
}





// 3 ta sonkhar moddhe theke boro sonkha ber kora function use kore

function getMaxOfThree( num1, num2, num3){
    if( num1 > num2 && num1 > num3 ){
        return num1;
    }
    else if( num2 > num1 && num2 > num3 ){
        return num2;
    }
    else{
        return num3;
    }
}
const max1 = getMaxOfThree(99, 57, 98);
console.log(max1);