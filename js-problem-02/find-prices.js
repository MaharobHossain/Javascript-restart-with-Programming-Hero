/**
 *    Shirt price - 500
 *    Pant price - 800
 *    Shoe price - 1500
 */

function totalPrices(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 800;
    const shoePrice = 1500;

    const shirtTotalPrices = shirtQuantity * shirtPrice;
    const pantTotalPrices = pantQuantity * pantPrice;
    const shoeTotalPrices = shoeQuantity * shoePrice;

    const allProductPrices = shirtTotalPrices + pantTotalPrices + shoeTotalPrices;
    return allProductPrices;
}

const totalProductPrices = totalPrices(1, 2, 1);
console.log("Your Total Prices is: ", totalProductPrices);