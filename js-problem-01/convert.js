// inch to feet convert
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const maharobHeight = inchToFeet(70);
console.log('My height is: ', maharobHeight, 'feet');




//Mile to Kilomiter convert
function mileToKilomiter(mile){
    const kilomiter = mile * 1.60934;
    return kilomiter;
}
const islumpurToBheramara = mileToKilomiter(15);
console.log('Islumpur to Bheramara distance is: ', islumpurToBheramara);