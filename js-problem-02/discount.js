/**
 *   up-to 100---> 100
 *   more than 101-200---> 90
 *   more than 200----> 75 
 */
// discount price find in js

function discountedPrice(quantity){
    if( quantity <= 100 ){
        let total = quantity * 100;
        return total;
    }
    else if( quantity <= 200 ){
        let total = quantity * 90;
        return total;
    }
    else{
        let total = quantity * 75;
        return total;
    }
}

const total = discountedPrice(250);
console.log("Total discounted price is:", total);