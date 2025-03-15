//  Total products price jog kora with quantity

const products = [
    {name:'Book', price:300, quantity: 3},
    {name:'Headphone', price:500, quantity: 1},
    {name:'T-shirt', price:700, quantity: 4},
    {name:'Panjabi', price:2000, quantity: 3}
];

function cartTotal(products){

    let total =0;
    for( let product of products){
        let thisProductPrice = product.price * product.quantity;
           total = total + thisProductPrice;
    }
    return total;
}

let shoppingCost = cartTotal(products);
console.log("Total shopping cost is:" , shoppingCost);