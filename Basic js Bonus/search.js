const numbers = [12, 79, 35, 53, 70, 47];

//Old for loop vertion
for( let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
}


//New for of loop
for(const number of numbers){
    console.log(number);
}



//     Array object ar moddhe theke search kore product ber kora

const products = [
    {id: 1, name: "iphone xs", price: 120000},
    {id: 2, name: "iphone 15 Pro", price: 20000},
    {id: 3, name: "Mac book laptop", price: 19000},
    {id: 4, name: "ipad", price: 120000},
    {id: 5, name: "Samsung 24 ultra", price: 120000},
    {id: 6, name: "Walton phone", price: 10000},
    {id: 7, name: "Redmi 12 pro", price: 12000},
    {id: 8, name: "Realme c25s phone", price: 17000},
    {id: 9, name: "Dell laptop", price: 120000},
    {id: 10, name: "Asus laptop", price: 120000},
    {id: 11, name: "Lava Phone", price: 12000},
    {id: 12, name: "Nokia Phone", price: 14000}
];


function searchProducts( products, search ){

    const matched = [];
    for( const product of products){
       // console.log(product.name.includes(search));      
        if(product.name.toLowerCase().includes(search.toLowerCase())){     //toLowerCase use korle coto hat/Boro hat er sob e search a dekhabe.
            matched.push(product);
        }
    }
    return matched;
}

const result = searchProducts(products, "phone");
// const result = searchProducts(products, "laptop");
console.log(result);
