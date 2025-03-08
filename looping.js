
/**
 * Looping in js---->
 * For loop
 * while loop
 * Do while loop
 * for in loop--->Object ke loop korar jonno use kora hoi
 * for of loop--->Array  ke loop korar jonno use hoi
 * 
 */


const friends = [ "Lalu", "Kalu", "Calu", "Balu", "Dalu", "Malu"];

// Normally For of loop use
for(const friend of friends){
    // console.log(friend);
}

// for loop use kore array ber kora
for (let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers = [35, 745, 6787, 23, 566];

for (let x = 0; x < numbers.length; x++){
    console.log(numbers[x]);
}

// while loop use kore array ber kora
const bonshus = [ "Lalu", "Kalu", "Calu", "Balu", "Dalu", "Malu"];
let z = 0;
while(z < bonshus.length){
    console.log(bonshus[z]);
    z++;
}
