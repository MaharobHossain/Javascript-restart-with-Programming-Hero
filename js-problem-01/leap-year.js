//   ------Simple way to find leap year

function isLeapYear(year){
    if( year % 4 === 0 ){
        console.log('This is leap year in js');
         return true;
    }
    else{
        console.log('This is not leap year in js');
         return false;
    }
}
 const lipiYear = isLeapYear(2024);
 const lipiYear2 = isLeapYear(2025);
 console.log|(lipiYear, lipiYear2);






//   ------Premium way to find leap year

function isLeapYear2(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        console.log('This is leap year');
        return true;
    }
    else if( year % 400 === 0){
        console.log('This is leap year');
        return true;
    }
    else{
        console.log('This is not leap year');
        return false;
    }
}

const leapYear = isLeapYear2(2100);
const leapYea2 = isLeapYear2(2400);
const leapYea3 = isLeapYear2(1900);
const leapYea4 = isLeapYear2(2052);

console.log(leapYear, leapYea2, leapYea3, leapYea4);