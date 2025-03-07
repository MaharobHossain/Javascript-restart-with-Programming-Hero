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
