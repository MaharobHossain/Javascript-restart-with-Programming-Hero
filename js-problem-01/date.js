const today = new Date();
console.log(today);

const date = new Date('1952-02-21');
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());

const specialDate = new Date(2110, 2, 25);
console.log(specialDate);
specialDate.setMonth(10);
specialDate.setDate(15);
console.log(specialDate.toLocaleString('en-GB'));