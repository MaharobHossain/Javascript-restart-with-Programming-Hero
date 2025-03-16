/**
 *  1 to 100 product ---> 100
 *  101 to 200 product ---> 85
 *  above 200 product ---> 75
 */
//  Layerd discount step by step

function layeredDiscountedTotal(quantity){

    let frist100Price = 100;
    let second100Price = 85;
    let above200Price = 75;

    if(quantity <= 100){
        let total = quantity * frist100Price;
        return total;
    }
    else if(quantity <= 200){
        let frist100Total = 100 * frist100Price;
        let remainingQuantity = quantity - 100;
        let remainingTotal = remainingQuantity * second100Price;
        let total = frist100Total + remainingTotal;
        return total;
    }
    else{
        let frist100Total = 100 * frist100Price;
        let second100Total = 100 * second100Price;
        let remainingQuantity = quantity - 200;
        let remainingTotal = remainingQuantity * above200Price;
        let total = frist100Total + second100Total + remainingTotal;
        return total;
    }
}

let total = layeredDiscountedTotal(100);
console.log("Total Discounted price is:", total);