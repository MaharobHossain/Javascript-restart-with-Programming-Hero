//___________For Of Loop___________

const numbers = [12, 34, 56, 67, 78, 68];
console.log(numbers);

for( const item of numbers){
    console.log(item + " aita num");
}


const fruits = ["Amra", "Lichu", "Kathal", "Kola"];
console.log(fruits);

for ( const item of fruits ) {
    console.log(item + " Khabo ami");
    console.log("Kawre khaite dibo nah,ami akai khabo");
}







//________Normal for loop_______

/**
 *     for(    ;     :     ) {
 *     }
 * 
 *  *     for(  1st part  ;  2nd part   :  3rd part   ) {
 *     }
 */


  for (let num = 2 ; num < 7 ; num ++){
    console.log(num);
  }


 
  
  //________For loop even (+)_______

  for (let number = 2 ; number <= 19 ; number = number + 2){
    console.log(number);
  }



    //________For loop odd (-)_______

    for (let numbers = 1 ; numbers <= 19 ; numbers = numbers + 2){
        console.log(numbers);
      }



      


//________________For loop Sum use_____________

let sum = 0;
for (let i = 150 ; i <= 200 ; i++){
//    console.log(i);
sum = sum + i;
}
console.log("all number total:", sum);





// _________Decremental for loop use___________

for (let x = 20; x >= 10; x--){
    console.log(x);
}




// _________For loop odd number another use___________

for ( y = 0; y < 12 ; y++ ){
    if( y%2===1 ){
        console.log(y);
    }
}


// _________For loop odd number another use (not equal to : !==)___________

for ( z = 0; z < 12 ; z++ ){
    if( z%2!==0 ){
        console.log(z);
    }
}


 // _________For loop sum of the number 1 to 50 devided by 3 ___________

 let total = 0;
 for( p = 1 ; p <= 20 ; p++ ){

    if( p % 3 === 0 ){
    //  console.log(p);
    total = total + p;
    console.log("Total num of sum: ", total);
    }
 }
 console.log(total);