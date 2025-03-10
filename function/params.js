

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