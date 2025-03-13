//   ------Simple way to find leap year

function isLeapYear(year){
    if( year % 4 === 0 ){
        console.log('This is leap year');
        // return true;
    }
    else{
        console.log('This is not leap year');
        // return false;
    }
}
const lipiYear = isLeapYear(2024);
console.log|(lipiYear);