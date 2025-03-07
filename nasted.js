const jussh = {
    brand: 'Apple',
    price: 50,
    isWater: true,
    color: "White",
    isClear: false,
    'premium juice': ["orange", 'mango', "apple"],
    flavour: {
        mango: "Mango-shake",
        orange:'orange-shake',
        apple:"Apple-shake",
        lemon:'lemon-shake',
        test: {
            refresh:"black-berry",
            recharg:'black-scoug'
        }
    }
}
jussh.flavour.test.refresh = "black-berry-pro";
console.log(jussh.color);
console.log(jussh.flavour.mango);
console.log(jussh.flavour.test.recharg);
console.log(jussh.flavour.test.refresh);

delete jussh.price; // kono value delete korar jonno
console.log(jussh);



// task for result (1-3)

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let prop in myObject) {
    console.log(myObject[prop]);
  }



const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}



const str = "Hello";
str[0] = "h";
console.log(str);

