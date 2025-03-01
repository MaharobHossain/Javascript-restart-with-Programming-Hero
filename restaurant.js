
const age = 24;
const price = 500;

if(age <= 15){
    console.log("You can eat Free")
}

else if( age >=60){
    // 15% discount use
    discountPrice = price * 15 /100;
    payAmount = price - discountPrice;
    console.log(payAmount);
}

else if( age >=50){
    // 10% discount use
    discountPrice = price * 10 /100;
    payAmount = price - discountPrice;
    console.log(payAmount);
}

else if( age >=40){
    // 5% discount use
    discountPrice = price * 5 /100;
    payAmount = price - discountPrice;
    console.log(payAmount);
}



else{
    console.log(price);
}