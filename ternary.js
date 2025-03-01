//  The Use of Turnery

/**
 * Turnery three part --->
 *     ?     :
 * condition  ? when true : when false
 */



// Normal if else example

let age = 15;

if(age >= 18){
    console.log(" Vote dite parba");
}
else{
    console.log("Vote dite parba nah")
}



// Simple Turnery use

// let age = 19;

// condition ?         true           :      false

//  age >=18 ? console.log("Vote daw") : console.log(" Vote dioo nah");




// let price = 500;
// const isLeader = true;

// if(isLeader === true){
//     console.log("You are free to pay");
// }
// else{
//     console.log(price +100);
// }



let price = 500;
const isLeader = true;

price = isLeader === true ? "You are free to pay" : price + 200;
console.log(price);