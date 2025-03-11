

function evenSizeStaring(str){
    const size = str.length;
        console.log(str, size);
    if( size % 2 === 0){
        console.log('Khele hobe');
        return true;
    }
    else{
        console.log(' Khele hobe nah');
        return false;
    }
}
evenSizeStaring('Dhaka');
evenSizeStaring("Baka");
evenSizeStaring("Khulna");







function isOdd(number){
    if( number % 2 === 1 ){
        return true;
    }
    return false;
}


console.log(isOdd(10));
console.log(isOdd(13));