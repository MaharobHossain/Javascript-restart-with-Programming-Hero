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
