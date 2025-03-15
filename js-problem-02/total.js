

const products = [
    {name:'Book', price:300},
    {name:'Headphone', price:500},
    {name:'T-shirt', price:700},
    {name:'Panjabi', price:2000}
  ];

  function getShoppingTotal(products){

    let total = 0;
    for( let product of products){
        total = total + product.price;
    }
    return total;
  }

  const total = getShoppingTotal(products);
  console.log("All products prices is: ", total);