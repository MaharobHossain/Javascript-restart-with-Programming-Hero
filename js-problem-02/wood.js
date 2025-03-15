/**
 *   chair = 3 cft
 *   tabel = 10 cft
 *   bed = 50 cft
 */


function woodQuantity(chairQuantity, tabelQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTabelWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tabelTotalWood = tabelQuantity * perTabelWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalAllWood = chairTotalWood + tabelTotalWood + bedTotalWood;
    return totalAllWood;
}

const woodNeed = woodQuantity(5, 3, 2);
console.log("You need total wood:", woodNeed);