// find the maximum number use if else

let daimul = 88;
let kasem = 79;

if(daimul > kasem){
    console.log("Daimul win the game");
}
else{
    console.log("Kasem win the game");
}




// find the maximum number use a function

function getMax(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(85, 69);
const max2 = getMax(63, 98);
console.log("Max of the tow is:", max1, max2);
const ultimateMax = getMax(max1, max2);
console.log("Max of the tow mort is:", ultimateMax);

