/**
 *  Multi Level Condition
 */



const oldPrice = 10000;

if (oldPrice >= 16000) {
    // 15% Discount use
    const discountPrice = oldPrice * 15 / 100;
    const payAmount = oldPrice - discountPrice;
    console.log(payAmount);
}

else if( oldPrice >13000){
    // 10% Discount use
    const discountPrice = oldPrice * 10 /100;
    const payAmount = oldPrice -discountPrice;
    console.log(payAmount);
}

else if( oldPrice >=10000){
    // 5% Discount use
    const discountPrice = oldPrice * 5 /100;
    const payAmount = oldPrice -discountPrice;
    console.log(payAmount);
}

else {
    console.log(oldPrice)
}