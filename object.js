       // Object use in js

    const bottle = {
        brand: 'Apple',
        price: 50,
        isWater: true,
        color: "White",
        isClear: false,
        'premium juice': ["orange", 'mango', "apple"]
    }

    // console.log(bottle);
    console.log(bottle.color);   //dot use kore kono value ber kora
    console.log(bottle['isClear']);  // []use kore value ber kora
    console.log(bottle['premium juice']); //proparty use kore value ber kora

    //----------new value add kora---------
    bottle.brand = 'Samsung'; // dot ar pore value change kora hoice
    bottle.price = 70;
    bottle.color = 'blue';
    bottle["premium juice"] = ["orangePP", 'mangoPP', "applePP"]; // [] use kore valu change kora
    console.log(bottle);


    //----------Key use in js---------
    const keys = Object.keys(bottle);
    console.log(keys);



      //----------values use in js---------
      const values = Object.values(bottle);
      console.log(values);
